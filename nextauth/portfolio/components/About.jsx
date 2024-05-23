export default function About() {
  return (
    <>
      <section id="about">
        <div className="bg-blue-300 max-w-7xl m-auto">
          <div className="flex flex-col w-full md:w-3/4 m-auto md:p-10 sm:flex-row p-2">
            <div className="w-full p-6 justify-center md:w-2/4">
              <h1 className="mb-4 font-mono text-black">Brian Michael</h1>
              <div className="flex flex-col gap-2 p-2 w-full sm:p-0">
                <p className="w-full">
                  I am a software engineer who is interested in building
                  products that change the world for the better.
                </p>
                <p>
                  I love looking at great designs not just software but also
                  artitectures and apart from that i love working on things i
                  find interesting
                </p>
                <p>
                  Seeking to be inspired, to envision the unlikely, to work hard
                  for things that are worth it, and to be surrounded by those
                  who bring out the best in me.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:w-2/4 w-full">
              <img
                className=" p-4 "
                src="/images/developer.jpg"
                alt="developer animation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
