import { ModeToggle } from "@/components/mode-toogle";
import Signout from "../(auth)/_components/sign-out";

export default function Home() {
    return (
        <div>
            <main><Signout /><ModeToggle /></main>
        </div>
    );
}
