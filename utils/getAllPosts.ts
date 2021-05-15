function importAll(r: any) {
  console.log({ r });
  return r.keys().map((fileName: string) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

export const posts = importAll(
  require?.context("./pages/blog/", true, /\.mdx$/)
);
