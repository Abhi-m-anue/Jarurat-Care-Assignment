import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"


import { EllipsisVertical, SquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface Service {
  name: string;
  description: string;
  price: number | null;
}

const Services = () => {
    const [healthServices, setHealthServices] = useState<Service[]>( [
    {
      name: "General Check-up",
      description:
        "A comprehensive health examination to assess your overall health.",
      price: 50,
    },
    {
      name: "Blood Test",
      description: "Routine blood work to check for various health conditions.",
      price: 30,
    },
    {
      name: "X-Ray",
      description:
        "Radiographic imaging to diagnose fractures or other issues.",
      price: 75,
    },
    {
      name: "Physical Therapy Session",
      description: "One-on-one therapy to rehabilitate and strengthen muscles.",
      price: 80,
    },
    {
      name: "Vaccination",
      description:
        "Immunization services for flu, COVID-19, and other preventable diseases.",
      price: 20,
    },
    {
      name: "Nutrition Counseling",
      description:
        "Personalized dietary advice to promote a healthy lifestyle.",
      price: 60,
    },
    {
      name: "Mental Health Counseling",
      description:
        "Confidential sessions with a licensed therapist to address mental health concerns.",
      price: 100,
    },
    // {
    //   name: "Dental Cleaning",
    //   description:
    //     "Professional cleaning to maintain oral hygiene and prevent disease.",
    //   price: 90,
    // },
    // {
    //   name: "Chiropractic Adjustment",
    //   description:
    //     "Manual adjustments to improve spinal alignment and relieve pain.",
    //   price: 70,
    // },
    // {
    //   name: "Skin Screening",
    //   description:
    //     "Full-body skin examination to check for abnormalities or signs of skin cancer.",
    //   price: 50,
    // },
  ]);

  const [formText, setFormText] = useState<Service>({
    name : "",
    description : "",
    price : null
  })

  const handleDelete = (index : number)=>{
    console.log(index);
        const updatedServices = [...healthServices]; 
        updatedServices.splice(index, 1);
        setHealthServices(updatedServices); 
  }
  return (
    <>
      <div className="pt-10">
        <p className="text-5xl text-center">Our Services</p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 px-20 pt-10 pb-20">
        {healthServices.map((service: Service,index) => {
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row justify-between">
                <CardTitle>{service.name}</CardTitle>
                {/* Pop-up for editing */}
                <Dialog>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>

                  {/* pop-up for deletion confirmation */}
                  <AlertDialog>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the selected health service.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={()=>handleDelete(index)}>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <EllipsisVertical size={18} color="gray" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                        </DialogTrigger>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </AlertDialog>
                </Dialog>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter>
                <p>${service.price}</p>
              </CardFooter>
            </Card>
          );
        })}

        {/* pop-up for adding a new service */}
        <Dialog>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Add a new service</DialogTitle>
              <DialogDescription>
                Add a new service by providing details. All fields are mandatory
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                    required
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Textarea
                required
                 className="col-span-3"/>

              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Price
                </Label>
                <Input
                required
                  id="username"
                  type="number"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </DialogContent>

          <DialogTrigger asChild>
            <Card className="flex justify-center items-center hover:bg-accent hover:cursor-pointer">
              <Button variant="ghost">
                <SquarePlus />
              </Button>
            </Card>
          </DialogTrigger>
        </Dialog>
      </div>
    </>
  );
};

export default Services;
