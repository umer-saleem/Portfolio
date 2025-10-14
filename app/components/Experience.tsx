// src/app/components/Experience.tsx
import { Disc } from "lucide-react";

const experiences = [
  {
    company: "University of Oulu",
    position: "Research Assistant",
    period: "Jan 2024 - Dec 2024",
    descriptions: [
      "Developed a computer vision–based Android app in Flutter to derive remote sensing reflectance from smartphone images, applying image processing and ML models to monitor water quality of Lake Oulujärvi, Finland.",
      "Applied exploratory data analysis (EDA) on structured and unstructured citizen-science based data, uncovering trends and anomalies to guide water quality ML models.",
    ],
    skills: [
      "Python","Flutter","Dart","Android","OpenCV","Firebase","Google Cloud Platform","NumPy","Pandas","Matplotlib","Image Processing","Remote Sensing","Machine Learning","EDA","Computer Vision",
    ],
  },
  {
    company: "VTT Technical Research Center",
    position: "Researcher",
    period: "Jun 2022 - May 2023",
    descriptions: [
      "Constructed a signal processing pipeline using supervised learning (ResNet50 regression) and semi-supervised ECG signal reconstruction (CNN and U-Net) from input radar data, applying model evaluation techniques and statistical analysis for accurate heart rate estimation.",
      "Applied supervised learning with ResNet50 to analyze 2D spectrograms from noisy PPG signals, regressing heart rate for wearable health monitoring applications using the PPG-DaLiA dataset, a benchmark in mobile health research.",
    ],
    skills: [
      "Python","R","NumPy","Pandas","Matplotlib","Scikit-learn","TensorFlow","Keras","ResNet50","CNN","U-Net","Deep Learning","Signal Processing","Model Evaluation","Statistical Analysis","Data Visualization",
    ],
  },
  {
    company: "Innovative Solutions",
    position: "Artificial Intelligence Engineer",
    period: "Apr 2021 - Sep 2021",
    descriptions: [
      "Fine-tuned transformer-based models (BERT and T5) for summarization and generative text tasks leveraging Hugging Face on Common Crawl datasets, enhancing user retention and reducing plagiarism for a news aggregation platform.",
    ],
    skills: [
      "Python","PyTorch","Hugging Face Transformers","BERT","T5","NLP","Text Summarization","Generative AI","Fine-tuning","Scikit-learn","Machine Learning",
    ],
  },
  {
    company: "CalculateData",
    position: "Data Analyst",
    period: "Jan 2021 - Jun 2021",
    descriptions: [
      "Leveraged SQL queries and Power BI to extract, transform, and visualize e-commerce datasets, producing insights that improved customer segmentation and targeting strategies.",
    ],
    skills: [
      "SQL","Python","Pandas","Power BI","Tableau","Excel","Data Cleaning","ETL","Data Visualization","Customer Segmentation","Analytical Reporting",
    ],
  },
  {
    company: "VisionX Technologies",
    position: "Data Scientist",
    period: "Mar 2019 - Nov 2020",
    descriptions: [
      "Developed a deep learning–based analytics pipeline with Keras and TensorFlow to detect, track, and classify customer demographics from surveillance feeds, providing insights into kiosk and curbside traffic patterns to optimize operations and enhance customer experience for McDonald’s.",
      "Developed and integrated a deep learning model with TuriCreate into a Flask API to detect room attributes, enhancing automated room measurement workflows with accurate 2D/3D floor plan generation for Staples’ measure app.",
      "Built a cloud-based analytics pipeline (AWS Lambda, RDS, InfluxDB) and executive Tableau dashboards uncovering correlations between client-specific performance-based metrics, supporting the launch of key client products.",
      "Adapted Flask API deployment to new operating system (Linux RedHat) and guided external partners through step-by-step technical implementations, demonstrating adaptability, problem-solving, and clear technical communication.",
    ],
    skills: [
      "Python","TensorFlow","Keras","Scikit-learn","Flask","AWS Lambda","AWS RDS","InfluxDB","Tableau","TuriCreate","OpenCV","Deep Learning","Data Pipelines","Cloud Computing","API Development","Model Deployment","Computer Vision",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          My Professional Journey
        </h2>

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 relative">
              
              {/* Timeline dot and continuous line */}
              <div className="hidden md:flex flex-col items-center relative">
                {/* Always show line below dot */}
                <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
                <div className="w-0.5 flex-1 bg-gray-300 mt-2"></div>
              </div>

              {/* Content Box (same style as project cards) */}
              <div
                className="flex-1 bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden 
                           hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-300 ease-in-out p-8"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {exp.descriptions.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700">
                      <Disc className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-justify">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills & Tools */}
                <h4 className="font-semibold text-gray-800 mb-2">
                  Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
