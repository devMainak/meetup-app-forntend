import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AllMeetUps from "./pages/AllMeetUps";

export default function App() {
  return (
    <main className="bg-light">
      <Header />
        <AllMeetUps />
    </main>
  );
}
