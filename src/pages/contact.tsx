import Head from 'next/head';
import Button from '../components/Button';

const Contact = () => (
  <div className="container">
    <Head>
      <title>Contact - Mark Murphy 🤟</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <form>
        <fieldset>
          <legend>
            <h2>Returning Customers</h2>
          </legend>
          <div className="form-element field">
            {/* required maxLength={120} aria-required aria-invalid aria-labeledby={} aria-describedby={} */}
            <input
              type="email"
              className="form-input form-control form-textfield"
              name="appleId"
            />
            <label className="form-label">Apple ID</label>
          </div>
          <Button>Button</Button>
        </fieldset>
      </form>
    </main>
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      fieldset {
        border: 0;
      }

      .form-element {
        position: relative;
      }

      .form-control {
        font-size: 17px;
        line-height: 1.23543;
        font-weight: 400;
        letter-spacing: -0.022em;
        /* font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
          Helvetica, Arial, sans-serif; */
        display: inline-block;
        box-sizing: border-box;
        vertical-align: top;
        width: 100%;
        height: 3.3em;
        margin-bottom: ${16 / 17}rem;
        padding-top: 1.05882rem;
        padding-left: ${16 / 17}rem;
        padding-right: ${16 / 17}rem;
        color: #333;
        text-align: left;
        border: 1px solid #d6d6d6;
        border-radius: 4px;
        background: hsla(0, 0%, 100%, 0.8);
        background-clip: padding-box;
        appearance: textfield;
      }

      .form-textfield:focus {
        appearance: none;
        border-color: #0070c9;
        outline: 0;
        box-shadow: 0 0 0 0.17647rem rgba(131, 192, 253, 0.5);
      }

      .is-error .form-textfield {
        border-color: #de071c;
        background: #fef0f0;
        margin-bottom: 0;
        margin-top: 0;
      }

      .is-error .form-textfield:focus {
        background: hsla(0, 0%, 100%, 0.8);
        border-color: #0070c9;
      }

      .form-label {
        font-size: 17px;
        line-height: 1.23543;
        font-weight: 400;
        letter-spacing: -0.022em;
        display: block;
        position: relative;
        color: #333;
      }

      .form-textfield ~ .form-label {
        position: absolute;
        top: 1.05882rem;
        left: 1rem;
        color: #888;
        padding: 0;
        z-index: 1;
        transition-timing-function: ease-in;
        transition-duration: 0.125s;
      }

      .is-error .form-textfield ~ .form-label {
        color: #de071c;
      }

      .form-textfield.form-textfield-entered ~ .form-label,
      .form-textfield:focus ~ .form-label,
      .form-textfield:valid[required] ~ .form-label,
      .form-textfield[placeholder] ~ .form-label {
        font-size: 12px;
        line-height: 1.75;
        font-weight: 400;
        letter-spacing: -0.01em;
        top: 0.47059rem;
        color: #666;
      }

      .form-textfield ~ .form-label {
        pointer-events: none;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: ${(17 / 16) * 100}%;
      }

      * {
        box-sizing: border-box;
      }

      abbr,
      blockquote,
      body,
      button,
      dd,
      dl,
      dt,
      fieldset,
      figure,
      form,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hgroup,
      input,
      legend,
      li,
      ol,
      p,
      pre,
      ul {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Contact;
