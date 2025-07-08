import projects from "@/consts/projects";
import websites from "@/consts/websites";
import techs from "@/consts/techs";
import media from "@/consts/media";

function mapLinks(links) {
    return Object.keys(links)
        .map(link => {
            const value = links[link];
            let href;

            // If the link value is already an absolute URL, use it directly
            if (value.startsWith("http://") || value.startsWith("https://")) {
                href = value;
            } else if (link === "figma") {
                href = `https://figma.com/community/file/${value}`;
            } else if (link === "github" && value.startsWith("/")) {
                href = media.github + value;
            } else {
                // generic case: prepend https and optional subdomain from websites map
                href = `https://${link === "live" ? "" : websites[link] || ""}${value}`;
            }

            const className = link === "cached" ? "button__secondary" : "";
            const name = `${link[0].toUpperCase()}${link.slice(1)}`;

            return /*html*/ `<a href="${href}" class="button ${className}" target="_blank" rel="noopener noreferrer">${name} =></a>`;
        })
        .join("");
}

export default ({ id }) => {
    const project = projects.find(p => p.id === id);
    if (!project) {
        return `<div class="project__error">Project \"${id}\" not found.</div>`;
    }

    const {
        id: projectId,
        name = projectId,
        description = project.description || "No description available.",
        techs: projectTech = [],
        links = {},
        hasImage = false
    } = project;

    return /*html*/ `
        <div class="project">
            ${hasImage ? `<img src="/images/projects/${projectId}.webp" alt="${name}" class="project__image">` : ""}
            <ul class="project__techs">
                ${projectTech
                    .map(
                        tech => /*html*/ `<li class=\"project__tech\">${techs[tech] || tech}</li>`
                    )
                    .join("")}
            </ul>

            <div class="project__content">
                <div class="project__name">${name}</div>
                <div class="project__description">${description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div>
    `;
};
