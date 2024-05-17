import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2021/08/royal-palace-madrid-architecture.jpeg"
        title="Our first meetups"
        address="Some street 5, Some city"
        description="The meetup description"
      />
    </>
  );
}

// export async function getStaticpaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   const meetupId = context.params;
//   console.log(meetupId);
//   return {
//     props: {
//       meetupData: {
//         image:
//           "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2021/08/royal-palace-madrid-architecture.jpeg",
//         id: "meetupId",
//         title: "Our first meetups",
//         address: "Some street 5, Some city",
//         description: "The meetup description",
//       },
//     },
//   };
// }
