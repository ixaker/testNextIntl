import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const nextUrlDataTest = cookieStore.get("next-url-data-test")?.value || "";

  const data = JSON.parse(nextUrlDataTest);
  const prettyJson = JSON.stringify(data, null, "\t");

  return <pre>{prettyJson}</pre>;
}
