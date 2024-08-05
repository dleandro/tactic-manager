import FootballPitch from "./components/FootballPitch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl font-bold">In posession</div>
      <br />
      <FootballPitch />
      <br />
      <div className="text-2xl font-bold">Out of posession</div>
      <br />
      <FootballPitch />
      <br />
      <div className="text-2xl font-bold">Building from the back</div>
      <br />
      <FootballPitch />
      <br />
      <div className="text-2xl font-bold">
        When the opponent is building from the back
      </div>
      <br />
      <FootballPitch />
    </main>
  );
}
