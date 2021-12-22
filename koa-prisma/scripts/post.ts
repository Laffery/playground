import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { cosConfig } from "../src/config/cos.config";

const prisma = new PrismaClient();

const cosBaseUrl = `https://${cosConfig.bucket}.cos.${cosConfig.region}.myqcloud.com`;

async function loadBlogs() {
  const manifestUrl = `${cosBaseUrl}/post/manifest.json`;
  const { blogs } = await axios.get(manifestUrl).then((res) => res.data);

  blogs.map(async (element) => {
    const dateStr = element.releaseTime.split("-").map((s) => Number(s));
    const date = new Date(dateStr[0], dateStr[1] - 1, dateStr[2]);
    await prisma.blog.create({
      data: {
        // id: element.id as number,
        title: element.title as string,
        url: `${cosBaseUrl}/post/${element.filename}`,
        createAt: date,
        updateAt: date,
        visit: 0,
      },
    });
  });

  // add your queries here
  console.dir(
    await prisma.blog.findMany({
      orderBy: {
        createAt: "desc",
      },
    }),
    { depth: null }
  );
}

async function loadDynamics() {
  const manifestUrl = `${cosBaseUrl}/qx/manifest.json`;
  const { data: dynamics } = await axios
    .get(manifestUrl)
    .then((res) => res.data);

  dynamics.map(async ({ text, img }: { text: string; img: string }) => {
    const dateStr = img.replace(/qx\//, "").replace(/\.png/, "");

    const date = new Date(
      Number(dateStr.substring(0, 4)),
      Number(dateStr.substring(4, 6)) - 1,
      Number(dateStr.substring(6, 8)),
      Number(dateStr.substring(8, 10)) + 8,
      Number(dateStr.substring(10, 12)),
      Number(dateStr.substring(12, 14))
    );
    await prisma.dynamic.create({
      data: {
        text: text,
        image: `${cosBaseUrl}/${img}`,
        createAt: date,
        updateAt: date,
      },
    });
  });

  //  add your queries here
  console.dir(
    await prisma.dynamic.findMany({
      orderBy: {
        createAt: "desc",
      },
    }),
    { depth: null }
  );
}

async function main() {
  await prisma.$connect();

  console.log("load blogs", loadBlogs);
  // loadBlogs();

  console.log("load dynamics");
  loadDynamics();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
