import Link from "next/link";

export default function HeaderLayout() {
  return (
    <header style={{ width: "100%" }}>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contato"}>Contato</Link>
          </li>
        </ul>
      </nav>

      <div>LOGO</div>

      <nav>
        <ul>
          <li>
            <Link href={"https://www.instagram.com"}>Instagram</Link>
          </li>
          <li>
            <Link href={"http://www.tiktok.com"}>TikTok</Link>
          </li>
          <li>
            <Link href={"https://www.youtube.com"}>You tube</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
