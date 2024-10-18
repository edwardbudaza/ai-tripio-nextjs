'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { resolve } from '@/sanity/presentation/resolve'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env';
import {schema} from './src/sanity/schemaTypes';
import {structure} from './src/sanity/structure';
import { myTheme } from './theme';
import StudioNavbar from '@/components/studio/StudioNavbar';
import Logo from '@/components/studio/Logo';

export default defineConfig({
  basePath: '/studio',
  name: "AI_Tripio_Content_Studio",
  title: "AI Tripio Content Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme
})
