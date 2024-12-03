import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export default function ShoppingCartPage() {
  return (
    <div className="w-screen h-screen overflow-hidden  ">
      <div className="flex h-full">
        <div className="flex-1 overflow-y-scroll">
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="h-64 w-full p-2">
            <CardContent className="bg-slate-200 rounded-lg h-full w-full flex p-0  items-center">
              <div className=" flex-[.8] h-full relative ">
                <Image
                  src="/test.png"
                  alt="test"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className=" flex-1 text-center flex flex-col gap-3">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum delectus, at id quod aut quis facere nostrum
                  placeat assumenda corrupti eius, laborum commodi reprehenderit
                  incidunt odit maxime beatae ad perferendis?
                </h5>
              </CardTitle>

              <CardDescription className="relative  h-full flex-[.8] flex flex-col gap-4 items-center justify-center ">
                <h5 className=" text-3xl">
                  Cantidad: <b className="text-purple-500">3</b>
                </h5>
                <div className="flex gap-2">
                  <Button variant={"secondary"}>Rest</Button>
                  <Button variant={"secondary"}>Add</Button>
                </div>
                <Button
                  variant={"destructive"}
                  className="absolute top-0 right-0"
                >
                  Delete
                </Button>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="min-w-[25vw]">
          <CardHeader>
            <CardTitle>Precio total</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <span>$ 300 DLRS </span>
            </div>
            <Button variant="default" className="w-full">
              Proceder al pago
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
