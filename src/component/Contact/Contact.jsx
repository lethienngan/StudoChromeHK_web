import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.scss";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const [sending, setSending] = useState(false);

    useEffect(() => {
        emailjs.init({
            publicKey: "eU9qUrneYmUT43p2d",
            blockHeadless: true,
            limitRate: {
                // Set the limit rate for the application
                id: "app",
                // Allow 1 request per 10s
                throttle: 1000,
            },
        });
    }, []);

    const handleSendEmail = async () => {
        try {
            setSending(true);
            if (name === "" || email === "" || number === "" || subject === "" || msg === "") {
                setSending(false);
                alert("please populate all field before send mail !");
                return;
            }
            const result = await emailjs.send("service_pdi4asj", "template_biapssc", {
                name: name,
                email: email,
                message: msg,
                number: number,
                subject: subject,
            });
            if (result.status === 200) {
                alert("Email has been sent !");
            }
            setName("");
            setEmail("");
            setNumber("");
            setSubject("");
            setMsg("");
            setSending(false);
        } catch (error) {
            setSending(false);
            alert("Cannot send email !");
        }
    };
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.contentContainer}>
                <div className={styles.greeting}>
                    <li>CONTACT</li>
                </div>
                <div className={styles.name}>
                    <h1>KEEP IN TOUCH</h1>
                    <p>
                        Choose the course you prefer (depending on availability). Choose from a variety of sizes and
                        styles. Lorem ipsum viverra tristique justo duis vitae diaminte neque nivamus aestan artines in
                        the nedana mis erodino fermen.
                    </p>
                </div>
            </div>
            
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <FaPhoneVolume />
                        </div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>By Phone</h3>
                            <p className={styles.itemInfo}>0992831289</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <MdEmail />
                        </div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>By Email</h3>
                            <p className={styles.itemInfo}>something@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <FaPhoneVolume />
                        </div>
                        <div className={styles.itemContent}>
                            <h3 className={styles.itemTitle}>Addres</h3>
                            <p className={styles.itemInfo}>38 Broadway NY, 1001 USA</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <h2>CONNECT WITH US</h2>
                    <input
                        value={name}
                        type="text"
                        placeholder="Your name*"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        value={email}
                        type="text"
                        placeholder="Your email*"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        value={number}
                        type="text"
                        placeholder="Your number*"
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        value={subject}
                        type="text"
                        placeholder="Your subject*"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="20"
                        placeholder="Message*"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                    <button onClick={() => handleSendEmail()} disabled={sending}>
                        {sending ? "..." : "SEND MESSAGE"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
