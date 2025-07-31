"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { suggestServices, type SuggestServicesInput } from "@/ai/flows/suggest-services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Wand2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: "Please provide a more detailed project description (at least 20 characters).",
  }),
});

export default function ServiceSuggester() {
  const [suggestedServicesState, setSuggestedServicesState] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: "",
    },
  });

  const onSubmit: SubmitHandler<SuggestServicesInput> = async (data) => {
    setIsLoading(true);
    setSuggestedServicesState([]);
    try {
      const result = await suggestServices(data);
      if (result && result.suggestedServices) {
        setSuggestedServicesState(result.suggestedServices);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not get suggestions. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error suggesting services:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-lg border border-secondary">
      <CardHeader className="text-center">
        <div className="flex justify-center items-center mb-4">
            <Wand2 className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="text-3xl font-bold">Intelligent Service Suggestion</CardTitle>
        <CardDescription className="text-xl text-muted-foreground">
          Not sure where to start? Describe your project, and our AI will suggest the right services for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'I'm developing a 50-acre residential subdivision and need to establish property lines, map the terrain, and plan for utility installations.'"
                      className="min-h-[120px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Suggest Services
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
        {suggestedServicesState.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-center mb-4">Recommended Services:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedServicesState.map((service, index) => (
                <Badge key={index} variant="default" className="text-lg py-2 px-4 bg-primary/20 text-primary-foreground border-primary hover:bg-primary/30">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
