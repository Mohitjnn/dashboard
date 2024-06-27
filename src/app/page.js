import MyComponent from "@/components/Filters/Filters";

export default function Home() {
  return (
    <main>
      <center>
        <section
          className="w-full flex justify-start px-20 items-center space-x-20 h-[10vh]"
          style={{ boxShadow: "0px 0px 2px  #897d7d" }}
        >
          <MyComponent />
        </section>
      </center>
    </main>
  );
}
