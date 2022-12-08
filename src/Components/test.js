import { useRouter } from "./router";
import Head from "./Header/Head";

const router = useRouter();
return <Head className={router.pathname === "/" ? "Home" : "other"} />;
