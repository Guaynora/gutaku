import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

function schedule() {
  return (
    <>
      <Head>
        <title>Gutaku-About</title>
      </Head>
      <Layout>
        <section>
          <p>Gutaku was made by Jonathan Guaynora in 2021</p>
          <p>
            This website was created for the purpose of learning{" "}
            <strong>React</strong> and <strong>Next.js</strong>
          </p>
          <p>
            This proyect usage
            <strong>
              <a
                href="https://jikan.moe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jikan API
              </a>
            </strong>
          </p>
          <p>
            <a
              href="https://github.com/Guaynora/gutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Code
            </a>
          </p>
          <p>The design is inspired by the following websites</p>
          <a
            href="https://animedia.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Animedia
          </a>
          <a
            href="https://otakustv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Otakustv
          </a>
          <a
            href="https://weebflix.netlify.app/Upcoming"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weebflix
          </a>
          <p>Social Media</p>
          <a
            href="https://twitter.com/JonathanGuayno2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter.svg" className="icon-social" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-guaynora-51b684197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.svg" className="icon-social" />
          </a>
        </section>
      </Layout>
      <style jsx>{`
        section {
          margin: 6rem auto;
          color: #fff;
          text-align: center;
        }
        a {
          margin: 0 10px;
          color: #857ed6;
        }

        .icon-social {
          width: 42px;
        }
      `}</style>
    </>
  );
}

export default schedule;
