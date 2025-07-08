// SkillBlock.js
import skills from "@/consts/skills";

export default ({ id }, t) => {
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${t[id]}</div>
            <ul class="skill-block__list">
                ${skills[id]
                    .map((tech) => `<li class="skill-block__skill">${tech}</li>`)
                    .join("")}
            </ul>
        </div>
    `;
};
