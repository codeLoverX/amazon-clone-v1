/* react-router style navigation: 
The Link component enables client-side navigation between two pages in the same Next.js app.
Client-side navigation means that the page transition happens using JavaScript, 
which is faster than the default navigation done by the browser.

Use the browser’s developer tools to change the background CSS property of <html> to yellow.
You’ll see that the yellow background persists between page transitions.
This shows that the browser does not load the full page and client-side navigation is working.
 */
import { Head } from "next/document"
import Link from "next/link"

export default function FirstPost() {
  return (
    
    <>
     <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>;
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )


}