import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import Banner from "../_components/Banner";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Banner />
        {draftMode().isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </div>
  );
}
