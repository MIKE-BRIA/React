import multiparty from "multiparty";
import fs from "fs";

export default async function handle(req, res) {
  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Error parsing form data" });
    }

    const links = [];

    try {
      // Loop through each file and handle as needed
      for (const key in files) {
        const fileArray = files[key];
        for (const file of fileArray) {
          // Ensure file exists
          if (!fs.existsSync(file.path)) {
            console.error("File does not exist:", file.path);
            continue;
          }

          // Get file extension and generate unique filename
          const extension = file.originalFilename.split(".").pop();
          const filename = `${Date.now()}.${extension}`;

          // Create a write stream to save the file
          const stream = fs.createWriteStream(`public/images/${filename}`);
          // Read the file data from the uploaded file
          const bufferedImage = fs.readFileSync(file.path);
          // Write the file data to the stream
          stream.write(Buffer.from(bufferedImage), (error) => {
            if (error) {
              console.error("Error saving file:", error);
              throw new Error("Saving file failed");
            }
          });

          const link = `/images/${filename}`;
          // Push the file information to the links array
          links.push(link);
        }
      }
      // Send links back to client
      return res.json({ links });
    } catch (error) {
      console.error("Error processing files:", error);
      res.status(500).json({ error: "Error processing files" });
    }
  });
}

export const config = {
  api: { bodyParser: false },
};
