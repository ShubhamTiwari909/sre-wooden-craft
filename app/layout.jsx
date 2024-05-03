import "./globals.css";
import { getSession } from "@/lib/utils";
import DynamicLayout from "@/components/DynamicLayout";

export default function RootLayout({ children }) {
  const uid = getSession("uid");

  return (
    <html lang="en">
      <DynamicLayout children={children} />
    </html>
  );
}
