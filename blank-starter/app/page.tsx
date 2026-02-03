import LoadLocalStorage from "@/ui/load-local";
import BookTable from "@/ui/table";

export default function Home() {
  return (
    <div>
      <LoadLocalStorage />
      <BookTable/>
    </div>
  );
}
