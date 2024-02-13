import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Fetch the desired redirection URL based on the slug parameter
    const redirectUrl = getRedirectUrlBasedOnSlug(router.asPath);

    // Redirect to the desired URL
    window.location.href = redirectUrl;
  }, [router]);

  // This page will never be displayed, as the user will be redirected
  return null;
};

const getRedirectUrlBasedOnSlug = (path) => {
  // Extract the slug from the path
  const slugMatch = path.match(/^\/([^\/]+)$/); // Match only if the path is exactly one level deep
  const slug = slugMatch ? slugMatch[1] : null;

  if (slug == "common-lore") {
    return "/common-lore" //Causes an infinite loop since there is literally nothing there
  }

  // If no custom URL is provided, redirect to the root. This kills 404 errors though, unsure.
  return "/";
};

export default RedirectPage;