const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const faqs = faqData;

function showFaq() {
  const faqContainer = document.getElementById("faq-container");
  faqContainer.innerHTML = "";

  faqs.forEach((faq) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");

    const faqQuestion = document.createElement("div");
    faqQuestion.classList.add("faq-question");
    faqQuestion.innerHTML = faq.question;

    const faqAnswer = document.createElement("div");
    faqAnswer.classList.add("faq-answer");
    faqAnswer.innerHTML = faq.answer;

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);

    faqContainer.appendChild(faqItem);
  });

  btnStatusUpdate();
}

function createFaq(question, answer) {
  const newFaq = {
    id: faqs.length + 1,
    question: question,
    answer: answer,
  };

  faqs.push(newFaq);

  showFaq();
}

function btnStatusUpdate() {
  const faqItems = document.getElementsByClassName("faq-item");

  Array.from(faqItems).forEach((item) => {
    const faqQuestion = item.querySelector(".faq-question");
    const faqAnswer = item.querySelector(".faq-answer");

    faqQuestion.addEventListener("click", () => {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      } else {
        faqAnswer.style.maxHeight = null;
      }
    });
  });
}

showFaq();
