import {defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "3gdrpofi",
    dataset: "production",
    title: "State of Antiquity Website",
    apiVersion: "2023-06-02",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config