import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import image from "./assets/image.jpg";
import Services from "./components/services";
import { useRef } from "react";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="grid md:grid-cols-2">
        <Card className="bg-bgAquaBlue border-none rounded-none lg:pt-20 md:pt-12 pt-10 lg:pl-10">
          <CardHeader>
            <CardTitle className="text-gray-600 lg:text-6xl text-4xl">
              JARURAT CARE
            </CardTitle>
            <CardDescription className="text-2xl">
              Changing Lives, Right Here
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xl tracking-wide py-5">
            <p>
              Jarurat Care offers more access to innovative healthcare. More
              locations. More lives made better. Right here.
            </p>
          </CardContent>
          <CardFooter className="py-4">
            <Button
              className="bg-gray-600 text-white rounded-none p-6 hover:text-black hover:bg-white"
              variant="secondary"
              onClick={() => {
                if (scrollRef.current) {
                  window.scrollTo({
                    behavior: "smooth",
                    top: (scrollRef.current.offsetTop),
                  });
                }
              }}
            >
              See our services
            </Button>
          </CardFooter>
        </Card>
        <div className="hidden md:block">
          <img src={image}></img>
        </div>
      </div>
      <div ref={scrollRef}></div>
      <Services></Services>
    </>
  );
}

export default App;
