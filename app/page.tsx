"use client";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Snowfall from "react-snowfall";
import { TypeAnimation } from "react-type-animation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import "./HeartRain.css";
const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Snowfall />
      <div className="justify-center">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-4">
            <Heart fill="red" stroke="red" size={50} />
          </div>
          <Card className="w-full max-w-sm border-pink-400 rounded-xl shadow-lg bg-opacity-80 bg-black/40 backdrop-blur-sm">
            <CardHeader className="flex justify-center">
              <CardAction>
                <img
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGs3dzcxdDFiN3NjcXI2bHA2cGdpNzFrZ2c0emczNzdubjJsbmxxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ooVFPvRxN3uFnC9QTo/giphy.gif"
                  alt=""
                />
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Хүндэт Хөөрхөн Энхжин таныг Valentine ",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{
                        fontSize: "1.4rem",
                        textAlign: "center",
                        color: "pink",
                      }}
                      repeat={Infinity}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-500 text-white hover:bg-red-600">
                      татгалцах
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>why ve? </DialogTitle>
                      <DialogDescription>zo zo</DialogDescription>
                    </DialogHeader>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-500 text-white hover:bg-green-600">
                      Зөвшөөрөх
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Урилга хүлээж авсанд баярлаа.</DialogTitle>
                      <DialogDescription>
                        2сарын14 өдөр 11цагт багшийн дээд урд уулзая дулаан
                        хувцаслаарай хөөрхнөө.
                        <img
                          className="flex justify-center"
                          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJqZG82dGR3ZDZ0bXNiMjV6YWFsZzF6c2N3dng1ZjFtbTk1cTA2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wIUQQ07BHzDry/giphy.gif "
                          alt=""
                        />
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Page;
