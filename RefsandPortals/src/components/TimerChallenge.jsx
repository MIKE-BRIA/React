export default function TimerChallenge({ title, targettime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targettime} second{targettime > 1 ? "s" : ""}
      </p>
      <button>Start Challenge</button>
      <p className="">Time is running..../ Timer inactive</p>
    </section>
  );
}
