import Path from "../components/Path.js";
import ProjectList from "../components/ProjectList.js";

import "styles/pages/projects.sass"

export default (t, t2) => {
    return /*html*/ `
        ${Path({ description: t.description })}
        ${ProjectList({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
    `;
};
