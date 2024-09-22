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
import { Textarea } from "@/components/ui/textarea";

import { EllipsisVertical, SquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface Service {
  name: string;
  description: string;
  price: number | null;
}

const Services = () => {
  const [healthServices, setHealthServices] = useState<Service[]>([
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
    name: "",
    description: "",
    price: null,
  });

  const [editService, setEditService] = useState<Service>({
    name: "",
    description: "",
    price: null,
  });

  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)
  const [createDialogOpen, setCreateDialogOpen] = useState<boolean>(false)

  const [editError, setEditError] = useState<string>("");
  const [createError, setCreateError] = useState<string>("");

  const [editIndex, setEditIndex] = useState<number>(0)


  const handleEditService = ()=>{

    if(!editService.name || !editService.description || !editService.price){
      setEditError("Please fill all fields")
      return
    }
    setEditError("")
    const updatedServices = [...healthServices];
    updatedServices[editIndex] = editService
    setHealthServices(updatedServices)
    setEditService({
      name: "",
      description: "",
      price: null,
    });
    setEditDialogOpen(false)
  }

  const handleDelete = (index: number) => {
    const updatedServices = [...healthServices];
    updatedServices.splice(index, 1);
    setHealthServices(updatedServices);
  };

  const handleNewService = () => {
    if(!formText.name || !formText.description || !formText.price){
      setCreateError("Please fill all fields")
      return
    }
    setCreateError("")
    setHealthServices([...healthServices, formText]);
    setFormText({
      name: "",
      description: "",
      price: null,
    });
    setCreateDialogOpen(false)
  };
  return (
    <>
      <div className="pt-10">
        <p className="text-5xl text-center">Our Services</p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:px-20 px-14 pt-10 pb-20">
        {healthServices.map((service: Service, index) => {
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row justify-between">
                <CardTitle>{service.name}</CardTitle>
                {/* Pop-up for editing */}
                <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>Edit</DialogTitle>
                      <DialogDescription>
                        Make changes to the service. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" className="col-span-3"
                        required
                        defaultValue={editService.name}
                        onChange={(e) => {
                          setEditService({ ...editService, name: e.target.value });
                        }} />
                      </div>
                     
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Description
                        </Label>
                        <Textarea
                        required
                          id="username"
                          defaultValue={editService.description}
                          className="col-span-3"
                          onChange={(e) => {
                            setEditService({ ...editService, description: e.target.value });
                          }}
                        />
                      </div>
                      
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Price
                        </Label>
                        <Input
                        required
                        defaultValue={String(editService.price)}
                        type="number"
                          className="col-span-1"
                          onChange={(e) => {
                            setEditService({ ...editService, price: Number(e.target.value) });
                          }}
                        />
                      </div>

                      <div className="text-right text-red-800">
                      {editError && <p>{editError}</p>}
                      </div>
                    </div>
                    <DialogFooter>
                <Button type="submit" onClick={()=>handleEditService()}>
                  Confirm
                </Button>

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
                        <AlertDialogAction onClick={() => handleDelete(index)}>
                          Continue
                        </AlertDialogAction>
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
                          <DropdownMenuItem onClick={  ()=> { 
                          setEditService({name : healthServices[index].name, description: healthServices[index].description, price : healthServices[index].price })
                          setEditIndex(index)
                          setEditError("")
                          }}>Edit</DropdownMenuItem>
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
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
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
                  className="col-span-3"
                  onChange={(e) => {
                    setFormText({ ...formText, name: e.target.value });
                  }}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Textarea
                  required
                  className="col-span-3"
                  onChange={(e) => {
                    setFormText({ ...formText, description: e.target.value });
                  }}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Price
                </Label>
                <Input
                  required
                  id="username"
                  type="number"
                  className="col-span-1"
                  onChange={(e) => {
                    setFormText({ ...formText, price: Number(e.target.value) });
                  }}
                />
              </div>
              <div className="text-right text-red-800">
                      {createError && <p>{createError}</p>}
                      </div>
            </div>
            <DialogFooter>
                <Button type="submit" onClick={handleNewService}>
                  Add
                </Button>
            </DialogFooter>
          </DialogContent>

          <DialogTrigger asChild>
            <Card className="min-h-52 flex justify-center items-center hover:bg-accent hover:cursor-pointer" onClick={() => setFormText({
    name: "",
    description: "",
    price: null,
  })
}>
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
