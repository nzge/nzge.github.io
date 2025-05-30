// JavaScript to add external link icons to all external links on the page
document.addEventListener("DOMContentLoaded", function () {
  const defaultIconUrl = "/assets/media/!misc/icons/link.svg"; // Fallback icon

  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const isExternal = /^https?:\/\//i.test(href) && !href.includes(window.location.hostname);

    // Skip icon if explicitly opted out
    if (link.hasAttribute("data-no-icon")) return;

    if (isExternal) {
      // Open in new tab securely
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      // Avoid duplicate icons
      if (link.querySelector("img")) return;

      // Add styling class for vertical centering
      link.classList.add("icon");

      // Detect if icon should go to the right
      const iconRight = link.classList.contains("icon-right") ||
                        link.getAttribute("data-icon") === "right" ||
                        link.getAttribute("class")?.includes("icon-right");

      try {
        const url = new URL(href);
        const faviconUrl = `https://www.google.com/s2/favicons?sz=16&domain=${url.hostname}`;

        const icon = document.createElement("img");
        icon.src = faviconUrl;
        icon.alt = "";
        icon.style.width = "16px";
        icon.style.height = "16px";

        // Basic alignment and spacing
        icon.style.margin = iconRight ? "0 0 0 4px" : "0 4px 0 0";

        // Fallback to default icon if favicon fails to load
        icon.onerror = () => { icon.src = defaultIconUrl; };

        // Insert icon in correct position
        if (iconRight) link.append(icon);
        else link.prepend(icon);
      } catch (e) {
        const fallbackIcon = document.createElement("img");
        fallbackIcon.src = defaultIconUrl;
        fallbackIcon.alt = "";
        fallbackIcon.style.width = "16px";
        fallbackIcon.style.height = "16px";
        fallbackIcon.style.margin = iconRight ? "0 0 0 4px" : "0 4px 0 0";
        if (iconRight) link.append(fallbackIcon);
        else link.prepend(fallbackIcon);
      }
    }
  });
});