import type {ReactNode} from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import SVGLogo from '@site/static/img/logo.svg';
import SproutyGIF from '@site/static/img/screenshots/characters/sprouty_talk_animation.gif';
import DialogueExampleImage from '@site/static/img/screenshots/first_dialogue_example.png'
import TranslationExampleImage from '@site/static/img/screenshots/translation_dialogue_example.png'
import CharacterEditorImage from '@site/static/img/screenshots/characters/character_editor.png'
import ComplexExampleImage from '@site/static/img/screenshots/complex_dialogue_example.png'

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero banner', styles.heroBanner)}>
      <div className="container">
        <SVGLogo className={styles.featureSvg} role="img" style={{width:'200px'}} />
        <Heading as="h1" className="hero__title poppins-extrabold">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle poppins-light">{siteConfig.tagline}</p>
        <GetStartedButton />
      </div>
    </header>
  );
}

function GetStartedButton () {
  return (
    <div className={styles.buttons}>
      <Link
        className="button button--secondary button--lg poppins-medium"
        style={{borderRadius: '2rem'}}
        to="/docs/intro">
        Get Started! 🌱
      </Link>
    </div>
  )
}

function SproutyDialogsFeatures() {
  return (
    <div className="container text-center padding-top--lg">
      {/* Sprouty dialogue example */}
      <div className="row">
        <div className="col">
          <h2 style={{ textAlign: 'center' }}>Create your dialogues easily with Sprouty Dialogs</h2>
          <p style={{ textAlign: 'center' }}>With the visual dialogue editor, you can easily create conversations and sequences in your games</p>
        </div>
      </div>
      <div className="row padding-top--md">
        <div className="col">
          <img style={{ borderRadius: '10px'}} src={DialogueExampleImage} alt='Dialogue Example'/>
        </div>
        <div className="col">
           <img style={{ borderRadius: '10px'}} src={SproutyGIF} alt='Sprouty Dialogue'/>
        </div>
      </div>
      {/* Character editor example */}
      <div className="row padding-top--lg">
        <div className="col col--4" style={{ alignContent: 'center'}}>
          <h2>Manage character, variables and more!</h2>
          <p>You can create and manage your characters for your dialogues with the <b>character editor</b>:</p>
          <ul>
            <li>Set up character profiles with <b>multiple customization options</b></li>
            <li>Assign <b>custom dialog boxes</b> per character for unique styling</li>
            <li>Create <b>multiple portraits</b> and customize whatever you want!</li>
            <li>You can <b>translate character names</b> for multi-language support</li>
          </ul>
          <p>Also, you can create and manage variables in the variable editor to <b>change the dialogue flow, make conditions, and more!</b></p>
        </div>
        <div className="col">
           <img style={{ width: '800', borderRadius: '10px'}} src={CharacterEditorImage} alt='Character Editor'/>
        </div>
      </div>
      {/* Translation example */}
      <div className="row">
        <div className="col padding-top--lg">
          <h2 style={{ textAlign: 'center' }}>Translate your dialogues in the editor</h2>
          <p style={{ textAlign: 'center' }}>Translate your dialogues and characters to any language without leaving the engine!</p>
          <img style={{ width: '800', borderRadius: '10px'}} src={TranslationExampleImage} alt='Translation Example'/>
        </div>
      </div>
      {/* Complex example */}
      <div className="row">
        <div className="col padding-top--lg">
          <h2 style={{ textAlign: 'center' }}>Organize your dialogues wharever you want!</h2>
          <p style={{ textAlign: 'center' }}>You can have multiple dialogue trees in a single dialogue file and organize them however you want</p>
          <img style={{ width: '800', borderRadius: '10px'}} src={ComplexExampleImage} alt='Complex Example'/>
        </div>
      </div>
    </div>
  )
}

function BottomSection() {
  return (
    <div className="container text-center padding-top--lg">
      <div className="row padding-bottom--lg">
        <div className="col">
          <h2 style={{ textAlign: 'center' }}>Start creating your dialogues with Sprouty Dialogs!</h2>
          <GetStartedButton />
        </div>
      </div>
      <div className='card tweet_x2tn'>
        <div className='card__body tweet_x2tn'>
          <p style={{ textAlign: 'center' }}>This project is licensed under the terms of the <a href="https://github.com/SproutyLabs/SproutyDialogs/blob/main/LICENSE">MIT license</a></p>
          </div>
      </div>
    </div>
  )
}

const KofiButton = () => {
  useEffect(() => {
    // Check if the script already exists
    if (document.querySelector('script[src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"]')) {
      // Script already loaded, just initialize if needed
      // @ts-ignore - KofiWidget is globally defined by the script
      if (window.kofiWidgetOverlay) {
        // @ts-ignore - KofiWidget is globally defined by the script
        window.kofiWidgetOverlay.draw('kazymila', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Donate',
          'floating-chat.donateButton.background-color': '#92db39',
          'floating-chat.donateButton.text-color': '#fff'
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore - KofiWidget is globally defined by the script
      window.kofiWidgetOverlay.draw('kazymila', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Donate',
        'floating-chat.donateButton.background-color': '#92db39',
        'floating-chat.donateButton.text-color': '#fff'
      });
    };
  }, []);

  return null; // Component loads the script, not a visible element
};


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sprouty Dialogs Documentation">
      <HomepageHeader />
      <main>
          <SproutyDialogsFeatures />
          <BottomSection />
          <KofiButton />
      </main>
    </Layout>
  );
}
