'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant geospatial services based on a user's project description.
 *
 * The flow takes a project description as input and returns a list of suggested services.
 * - suggestServices - A function that suggests geospatial services.
 * - SuggestServicesInput - The input type for the suggestServices function.
 * - SuggestServicesOutput - The return type for the suggestServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestServicesInputSchema = z.object({
  projectDescription: z.string().describe('A description of the user\u0027s geospatial project.'),
});
export type SuggestServicesInput = z.infer<typeof SuggestServicesInputSchema>;

const SuggestServicesOutputSchema = z.object({
  suggestedServices: z.array(z.string()).describe('A list of suggested geospatial services relevant to the project description.'),
});
export type SuggestServicesOutput = z.infer<typeof SuggestServicesOutputSchema>;

export async function suggestServices(input: SuggestServicesInput): Promise<SuggestServicesOutput> {
  return suggestServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestServicesPrompt',
  input: {schema: SuggestServicesInputSchema},
  output: {schema: SuggestServicesOutputSchema},
  prompt: `You are an AI assistant specializing in geospatial services provided by MEGA GEOSPATIAL.

  Based on the project description provided by the user, suggest relevant services from MEGA GEOSPATIAL.
  Return a JSON array of strings.

  Available services:
  - Real Estate Surveying
  - Engineering Surveying
  - Construction Surveying
  - Boundary Surveying
  - Topographic Surveying
  - ALTA/NSPS Land Title Surveys
  - Aerial Surveying & Mapping
  - 3D Laser Scanning
  - Geographic Information Systems (GIS)
  - Lidar
  - Digital Terrain Modeling (DTM)
  - Volumetric Surveys
  - Utility Mapping

  Project Description: {{{projectDescription}}}
  `,
});

const suggestServicesFlow = ai.defineFlow(
  {
    name: 'suggestServicesFlow',
    inputSchema: SuggestServicesInputSchema,
    outputSchema: SuggestServicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
