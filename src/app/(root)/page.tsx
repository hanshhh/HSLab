import Header from "./_components/Header";
import SplitWrapper from "./_components/SplitWrapper";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />
        <SplitWrapper />
      </div>
    </div>
  );
}
