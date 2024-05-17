import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2021/08/royal-palace-madrid-architecture.jpeg",
    address: "some adddress 555 Main Street",
    description: "This is our first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://cms.getnomad.app/uploads/640px_Madrid_city_tour_royal_palace_entrance_746adea82d.jpg",
    address: "some adddress 555 Main Street",
    description: "This is our first meetup",
  },
  {
    id: "m1",
    title: "A third Meetup",
    image: "https://www.touropia.com/gfx/b/2009/04/peterhof_palace.jpg",
    address: "some adddress 555 Main Street",
    description: "This is our first meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
