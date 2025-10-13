// src/app/components/Skills.tsx
const skillCategories = [
  {
    title: "Programming & Databases",
    icon: "",
    skills: [
      { name: 'Python', icon: '/logos/python.png', fontSize: 20 },
      { name: 'R', icon: '/logos/R.jpg', fontSize: 18 },
      { name: 'Java', icon: '/logos/java.webp', fontSize: 18 },
      { name: 'C++', icon: '/logos/c++.png', fontSize: 18 },
      { name: 'SQL', icon: '/logos/sql.jpg', fontSize: 18 },
      { name: 'MATLAB', icon: '/logos/matlab.PNG', fontSize: 18 },
      { name: 'Dart', icon: '/logos/dart.png', fontSize: 18 },
      { name: 'MySQL', icon: '/logos/mysql.PNG', fontSize: 18 },
      { name: 'SQLServer', icon: '/logos/sqlserver.PNG', fontSize: 18 },
      { name: 'PostgresSQL', icon: '/logos/postgressql.PNG', fontSize: 18 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "",
    skills: [
      { name: 'TensorFlow', icon: '/logos/tensorflow.png', fontSize: 18 },
      { name: 'PyTorch', icon: '/logos/pytorch.PNG', fontSize: 18 },
      { name: 'Keras', icon: '/logos/keras.PNG', fontSize: 18 },
      { name: 'Scikit-learn', icon: '/logos/scikitlearn.PNG', fontSize: 18 },
      { name: 'OpenCV', icon: '/logos/opencv.PNG', fontSize: 18 },
      { name: 'HuggingFace', icon: '/logos/huggingface.PNG', fontSize: 18 },
      { name: 'LLMs', icon: '/logos/llm.jpg', fontSize: 18 },
    ],
  },
  {
    title: "Data Visualization",
    icon: "",
    skills: [
      { name: 'Tableau', icon: '/logos/tableau.PNG', fontSize: 18 },
      { name: 'Power BI', icon: '/logos/powerbi.PNG', fontSize: 18 },
      { name: 'Matplotlib', icon: '/logos/matplotlib.PNG', fontSize: 18 },
      { name: 'Seaborn', icon: '/logos/seaborn.SVG', fontSize: 18 },
      { name: 'Plotly', icon: '/logos/plotly.PNG', fontSize: 18 },
    ],
  },
  {
    title: "Cloud & Big Data",
    icon: "",
    skills: [
      { name: 'AWS Lambda', icon: '/logos/aws.PNG', fontSize: 18 },
      { name: 'Firebase', icon: '/logos/firebase.PNG', fontSize: 18 },
      { name: 'AWS EC2', icon: '/logos/aws.PNG', fontSize: 18 },
      { name: 'AWS RDS', icon: '/logos/aws.PNG', fontSize: 18 },
      { name: 'Docker', icon: '/logos/docker.PNG', fontSize: 18 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
            >
              {/* Category title */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 text-center">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, i) => (
                  <SkillItem key={i} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SkillItem with dynamic width based on text
function SkillItem({
  skill,
}: {
  skill: { name: string; icon: string; fontSize?: number };
}) {
  return (
    <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg whitespace-nowrap">
      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
        <img
          src={skill.icon}
          alt={skill.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span
        className="font-semibold text-gray-800"
        style={{ fontSize: `${skill.fontSize || 18}px` }}
      >
        {skill.name}
      </span>
    </div>
  );
}
