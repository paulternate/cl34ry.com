import Home from '/admin/preview-templates/home.js';
import Career from '/admin/preview-templates/career.js';
import Blog from '/admin/preview-templates/blog.js';
import Article from '/admin/preview-templates/article.js';
import Projects from '/admin/preview-templates/projects.js';
import Project from '/admin/preview-templates/project.js';
import Contact from '/admin/preview-templates/contact.js';

// Register preview templates
CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('career', Career);
CMS.registerPreviewTemplate('blog', Blog);
CMS.registerPreviewTemplate('article', Article);
CMS.registerPreviewTemplate('projects', Projects);
CMS.registerPreviewTemplate('project', Project);
CMS.registerPreviewTemplate('contact', Contact);

// Register CSS
fetch('/')
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement('html');
    f.innerHTML = html;
    Array.from(f.getElementsByTagName('link')).forEach((tag) => {
      if (tag.rel == 'stylesheet' && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
