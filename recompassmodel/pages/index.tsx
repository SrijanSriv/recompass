import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/ChatComponent";

function Home() {
  return (
    <Page className="flex flex-col gap-12 bg-zinc-900 text-white min-h-screen min-w-full px-6 items-center">
      <section className="flex flex-col gap-6 lg:w-1/2">
        <Text variant="h1">ReCompass</Text>
        <Text className="text-zinc-300">
          Hi hello bye bye
        </Text>
      </section>

      <section className="flex flex-col lg:w-1/2 gap-3">
        <div className="">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;