import React, { useState, useEffect } from "react";
import Task from "./task";
import {
  MdOutlineTextsms,
  MdOutlineImage,
  MdOutlineAudiotrack,
  MdOutlineVideocam,
} from "react-icons/md";
import { Button } from "./button";
import { NavBar } from "./components/navbar";
import Footer from "./footer";

export default function Home() {
  const [index, setIndex] = useState(0);
  const sites = [
    "./nela-gen-1/01-getting-started-gen-1/index.md",
    "./nela-gen-1/index.md",
    "./nela-gen-beta/01-getting-started/index.md",
    "./nela-gen-beta/02-integration-guides/index.md",
    "./nela-gen-beta/03-text-based-ai-tasks/index.md",
    "./nela-gen-beta/index.md",
  ];
  const hello = [
    { href: "https://www.example.com/v1/contact-us/ca" },
    { href: "https://www.example.com/v1/contact-us/au" },
    { href: "https://www.example.com/v1/contact-us/us" },
    { href: "https://www.example.com/v1/dontcontact-us/us" },
  ];
  useEffect(() => {
    // const regex = new RegExp("/contact\\b", "g");
    // const intervalId = setInterval(() => {
    //   setIndex((prev) => (prev + 1) % 4);
    // }, 3000);
    // return () => clearInterval(intervalId);

    const matchedSites = sites.filter((href) => href.split("/").length < 4);
    console.log(matchedSites.map((key) => key.split("/")[1]));
    console.log(matchedSites);

    // console.log(sites.filter((href) => console.log(href)));
  }),
    [];

  return (
    <main className="w-full h-full ">
      <NavBar />
      <div className="w-full h-full flex p-10 mx-auto bg-blue-200">
        <div>
          <div className="w-full flex flex-col justify-center gap-10">
            <div className="mx-auto max-w-5xl flex flex-col justify-center gap-6">
              <h1 className="mx-auto w-fit text-center text-4xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-600 to-primary-700">
                Nela&#39;s Focus Area
              </h1>
              <p className="text-center text-lg text-gray-700 dark:text-neutral-300">
                Our cutting-edge AGI (Artificial General Intelligence) not only
                tackles a wide array of text-based, image-based, audio-based,
                and video-based tasks, but it&#39;s also geared up to dazzle you
                with even more capabilities in future generation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-medium text-lg text-black dark:text-neutral-300">
              <Button
                text="Text Based Tasks"
                onclick={() => setIndex(0)}
                icon={<MdOutlineTextsms className="w-5 h-5" />}
                condition={index === 0}
              />
              <Button
                text="Image Based Tasks"
                onclick={() => setIndex(1)}
                icon={<MdOutlineImage className="w-5 h-5" />}
                condition={index === 1}
              />
              <Button
                text="Audio Based Tasks"
                onclick={() => setIndex(2)}
                icon={<MdOutlineAudiotrack className="w-5 h-5" />}
                condition={index === 2}
              />
              <Button
                text="Video Based Tasks"
                onclick={() => setIndex(3)}
                icon={<MdOutlineVideocam className="w-5 h-5" />}
                condition={index === 3}
              />
            </div>
            <div>
              <Task
                task="Task"
                hidden={index !== 0}
                description="Revolutionize text-based tasks with our AGI product: Seamlessly generate, analyze, and extract insights from text, transforming how you approach index creation, data comprehension, and knowledge management. By focusing on these key areas, the Nela AGI aims to offer a comprehensive and adaptable solution for a wide range of text-based tasks, catering to the evolving needs of users in various industries and domains."
                list={[
                  "Text Generation",
                  "Text Summarization",
                  "Text Classification",
                  "Question Answering",
                  "Grammar and Spell Check",
                  "Text Mining and Analysis in documents and websites",
                  "Custom Knowledge Base Integration using Database, Documents",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineTextsms className="text-primary-600" />}
              />
              <Task
                task="Image"
                hidden={index !== 1}
                description="Revolutionize image-based tasks with our AGI product: Elevate your visual index creation, analysis, and understanding capabilities to new heights. Nela AGI empowers you to generate stunning images, seamlessly restore missing details, classify and describe visual elements, detect objects with precision, and answer questions based on visuals. With optical character recognition, it unlocks the textual information within images. By focusing on these key areas, Nela AGI is your versatile solution for conquering image-related challenges across diverse domains and industries."
                list={[
                  "Image Generation",
                  "Image Inpainting",
                  "Image Classification / Description",
                  "Object Detection",
                  "Object Segmentation",
                  "Visual Question Answering",
                  "Optical Character Recognition",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineImage className="text-primary-600" />}
              />
              <Task
                task="Audio"
                hidden={index !== 2}
                description="Elevate your audio-based tasks with our cutting-edge AGI product: Unlock the power of sound and voice like never before. Whether it's crafting melodies, restoring audio, or transcribing speech, our Nela AGI redefines what's possible. By specializing in these essential domains, we aim to provide an all-encompassing, adaptable solution to meet the diverse requirements of users across various industries and applications. Experience a new era in audio innovation with Nela AGI."
                list={[
                  "Music Generation",
                  "Music Inpainting",
                  "Music Segmentation",
                  "Audio Classification",
                  "Audio Segmentation",
                  "Text to Speech",
                  "Speech to Text",
                  "Speech Segmentation",
                  "Speech Enhancement",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineAudiotrack className="text-primary-600" />}
              />
              <Task
                task="Video"
                hidden={index !== 3}
                description="Unlock the future of video-related tasks with our advanced AGI product. From generating captivating videos to categorizing and summarizing index, our Nela AGI is here to revolutionize the way you interact with visual media. With seamless integration of cutting-edge technology, we aim to provide a versatile and adaptable solution for video-based tasks across diverse industries and applications. Say goodbye to traditional video processing limitations and embrace the limitless possibilities of our AGI-driven approach."
                list={[
                  "Video Generation",
                  "Video Classification",
                  "Video Captioning",
                  "Video Summarization",
                  "Video Shorts Extraction",
                  "Talking Head Synthesis",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineVideocam className="text-primary-600" />}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-10">
            <div className="mx-auto max-w-5xl flex flex-col justify-center gap-6">
              <h1 className="mx-auto w-fit text-center text-4xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-600 to-primary-700">
                Nela&#39;s Focus Area
              </h1>
              <p className="text-center text-lg text-gray-700 dark:text-neutral-300">
                Our cutting-edge AGI (Artificial General Intelligence) not only
                tackles a wide array of text-based, image-based, audio-based,
                and video-based tasks, but it&#39;s also geared up to dazzle you
                with even more capabilities in future generation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-medium text-lg text-black dark:text-neutral-300">
              <Button
                text="Text Based Tasks"
                onclick={() => setIndex(0)}
                icon={<MdOutlineTextsms className="w-5 h-5" />}
                condition={index === 0}
              />
              <Button
                text="Image Based Tasks"
                onclick={() => setIndex(1)}
                icon={<MdOutlineImage className="w-5 h-5" />}
                condition={index === 1}
              />
              <Button
                text="Audio Based Tasks"
                onclick={() => setIndex(2)}
                icon={<MdOutlineAudiotrack className="w-5 h-5" />}
                condition={index === 2}
              />
              <Button
                text="Video Based Tasks"
                onclick={() => setIndex(3)}
                icon={<MdOutlineVideocam className="w-5 h-5" />}
                condition={index === 3}
              />
            </div>
            <div>
              <Task
                task="Task"
                hidden={index !== 0}
                description="Revolutionize text-based tasks with our AGI product: Seamlessly generate, analyze, and extract insights from text, transforming how you approach index creation, data comprehension, and knowledge management. By focusing on these key areas, the Nela AGI aims to offer a comprehensive and adaptable solution for a wide range of text-based tasks, catering to the evolving needs of users in various industries and domains."
                list={[
                  "Text Generation",
                  "Text Summarization",
                  "Text Classification",
                  "Question Answering",
                  "Grammar and Spell Check",
                  "Text Mining and Analysis in documents and websites",
                  "Custom Knowledge Base Integration using Database, Documents",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineTextsms className="text-primary-600" />}
              />
              <Task
                task="Image"
                hidden={index !== 1}
                description="Revolutionize image-based tasks with our AGI product: Elevate your visual index creation, analysis, and understanding capabilities to new heights. Nela AGI empowers you to generate stunning images, seamlessly restore missing details, classify and describe visual elements, detect objects with precision, and answer questions based on visuals. With optical character recognition, it unlocks the textual information within images. By focusing on these key areas, Nela AGI is your versatile solution for conquering image-related challenges across diverse domains and industries."
                list={[
                  "Image Generation",
                  "Image Inpainting",
                  "Image Classification / Description",
                  "Object Detection",
                  "Object Segmentation",
                  "Visual Question Answering",
                  "Optical Character Recognition",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineImage className="text-primary-600" />}
              />
              <Task
                task="Audio"
                hidden={index !== 2}
                description="Elevate your audio-based tasks with our cutting-edge AGI product: Unlock the power of sound and voice like never before. Whether it's crafting melodies, restoring audio, or transcribing speech, our Nela AGI redefines what's possible. By specializing in these essential domains, we aim to provide an all-encompassing, adaptable solution to meet the diverse requirements of users across various industries and applications. Experience a new era in audio innovation with Nela AGI."
                list={[
                  "Music Generation",
                  "Music Inpainting",
                  "Music Segmentation",
                  "Audio Classification",
                  "Audio Segmentation",
                  "Text to Speech",
                  "Speech to Text",
                  "Speech Segmentation",
                  "Speech Enhancement",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineAudiotrack className="text-primary-600" />}
              />
              <Task
                task="Video"
                hidden={index !== 3}
                description="Unlock the future of video-related tasks with our advanced AGI product. From generating captivating videos to categorizing and summarizing index, our Nela AGI is here to revolutionize the way you interact with visual media. With seamless integration of cutting-edge technology, we aim to provide a versatile and adaptable solution for video-based tasks across diverse industries and applications. Say goodbye to traditional video processing limitations and embrace the limitless possibilities of our AGI-driven approach."
                list={[
                  "Video Generation",
                  "Video Classification",
                  "Video Captioning",
                  "Video Summarization",
                  "Video Shorts Extraction",
                  "Talking Head Synthesis",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineVideocam className="text-primary-600" />}
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-10">
            <div className="mx-auto max-w-5xl flex flex-col justify-center gap-6">
              <h1 className="mx-auto w-fit text-center text-4xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-600 to-primary-700">
                Nela&#39;s Focus Area
              </h1>
              <p className="text-center text-lg text-gray-700 dark:text-neutral-300">
                Our cutting-edge AGI (Artificial General Intelligence) not only
                tackles a wide array of text-based, image-based, audio-based,
                and video-based tasks, but it&#39;s also geared up to dazzle you
                with even more capabilities in future generation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-medium text-lg text-black dark:text-neutral-300">
              <Button
                text="Text Based Tasks"
                onclick={() => setIndex(0)}
                icon={<MdOutlineTextsms className="w-5 h-5" />}
                condition={index === 0}
              />
              <Button
                text="Image Based Tasks"
                onclick={() => setIndex(1)}
                icon={<MdOutlineImage className="w-5 h-5" />}
                condition={index === 1}
              />
              <Button
                text="Audio Based Tasks"
                onclick={() => setIndex(2)}
                icon={<MdOutlineAudiotrack className="w-5 h-5" />}
                condition={index === 2}
              />
              <Button
                text="Video Based Tasks"
                onclick={() => setIndex(3)}
                icon={<MdOutlineVideocam className="w-5 h-5" />}
                condition={index === 3}
              />
            </div>
            <div>
              <Task
                task="Task"
                hidden={index !== 0}
                description="Revolutionize text-based tasks with our AGI product: Seamlessly generate, analyze, and extract insights from text, transforming how you approach index creation, data comprehension, and knowledge management. By focusing on these key areas, the Nela AGI aims to offer a comprehensive and adaptable solution for a wide range of text-based tasks, catering to the evolving needs of users in various industries and domains."
                list={[
                  "Text Generation",
                  "Text Summarization",
                  "Text Classification",
                  "Question Answering",
                  "Grammar and Spell Check",
                  "Text Mining and Analysis in documents and websites",
                  "Custom Knowledge Base Integration using Database, Documents",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineTextsms className="text-primary-600" />}
              />
              <Task
                task="Image"
                hidden={index !== 1}
                description="Revolutionize image-based tasks with our AGI product: Elevate your visual index creation, analysis, and understanding capabilities to new heights. Nela AGI empowers you to generate stunning images, seamlessly restore missing details, classify and describe visual elements, detect objects with precision, and answer questions based on visuals. With optical character recognition, it unlocks the textual information within images. By focusing on these key areas, Nela AGI is your versatile solution for conquering image-related challenges across diverse domains and industries."
                list={[
                  "Image Generation",
                  "Image Inpainting",
                  "Image Classification / Description",
                  "Object Detection",
                  "Object Segmentation",
                  "Visual Question Answering",
                  "Optical Character Recognition",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineImage className="text-primary-600" />}
              />
              <Task
                task="Audio"
                hidden={index !== 2}
                description="Elevate your audio-based tasks with our cutting-edge AGI product: Unlock the power of sound and voice like never before. Whether it's crafting melodies, restoring audio, or transcribing speech, our Nela AGI redefines what's possible. By specializing in these essential domains, we aim to provide an all-encompassing, adaptable solution to meet the diverse requirements of users across various industries and applications. Experience a new era in audio innovation with Nela AGI."
                list={[
                  "Music Generation",
                  "Music Inpainting",
                  "Music Segmentation",
                  "Audio Classification",
                  "Audio Segmentation",
                  "Text to Speech",
                  "Speech to Text",
                  "Speech Segmentation",
                  "Speech Enhancement",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineAudiotrack className="text-primary-600" />}
              />
              <Task
                task="Video"
                hidden={index !== 3}
                description="Unlock the future of video-related tasks with our advanced AGI product. From generating captivating videos to categorizing and summarizing index, our Nela AGI is here to revolutionize the way you interact with visual media. With seamless integration of cutting-edge technology, we aim to provide a versatile and adaptable solution for video-based tasks across diverse industries and applications. Say goodbye to traditional video processing limitations and embrace the limitless possibilities of our AGI-driven approach."
                list={[
                  "Video Generation",
                  "Video Classification",
                  "Video Captioning",
                  "Video Summarization",
                  "Video Shorts Extraction",
                  "Talking Head Synthesis",
                ]}
                src="/ai-text.png"
                icon={<MdOutlineVideocam className="text-primary-600" />}
              />
            </div>
          </div>
        </div>
        <div className="flex-none hidden w-64 pl-8 mr-8 font-medium text-lg xl:block">
          <div class="flex overflow-y-auto sticky top-28 flex-col justify-between pt-10 pb-6 h-[calc(100vh-10rem)]">
            <div class="mb-8">
              <ul>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
                <li>
                  <a href="#default-sticky-banner" class="">
                    Default sticky banner
                  </a>
                </li>
                <li>
                  <a href="#bottom-banner-position" class="">
                    Bottom banner position
                  </a>
                </li>
                <li>
                  <a href="#marketing-cta-banner" class="">
                    Marketing CTA banner
                  </a>
                </li>
                <li>
                  <a href="#newsletter-sign-up-banner" class="">
                    Newsletter sign-up banner
                  </a>
                </li>
                <li>
                  <a href="#informational-banner" class="">
                    Informational banner
                  </a>
                </li>
                <li>
                  <a
                    href="#more-examples"
                    class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
                  >
                    More examples
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
