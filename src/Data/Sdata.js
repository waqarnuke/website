import {
  AiOutlineMobile,
  AiOutlineAppstore,
  AiOutlineBarcode,
  AiOutlinePrinter,
  AiOutlineDeploymentUnit,
  AiOutlineRobot,
  AiOutlineCustomerService,
  AiOutlineSearch,
  AiOutlineAreaChart,
  AiOutlineDatabase,
  AiOutlineRocket,
  AiOutlineUser,
  AiOutlineHtml5,
} from "react-icons/ai";
import { BsMicrosoft } from "react-icons/bs";

const Sdata = [
  {
    id: 1,
    name: 'AI Chatbot & Custom AI Integration',
    icon: <AiOutlineRobot className="fs-1 text-primary" />,
    description: 'Transform your digital experience with AI-powered automation...',
    features: [
      'Real-time conversational AI integration',
      'Multi-language chatbot support',
      'Custom workflow automation',
      'Seamless system integration'
    ]
  },
  {
    id: 2,
    name: 'Customized Mobile Apps',
    icon: <AiOutlineMobile className="fs-1 text-primary" />,
    description: 'We specialize in building tailored mobile applications for enterprise and industrial environments, including rugged devices and PDAs. Our solutions are designed for performance, scalability, and seamless user experience, ensuring your business processes run efficiently on any device.',
  },
  {
    id: 3,
    name: 'Mobile Computing Solutions',
    icon: <AiOutlineAppstore className="fs-1 text-primary" />,
    description: 'From concept to deployment, SoftCygnus delivers complete mobile computing solutions. We design, develop, and optimize applications that align with your business goals while ensuring usability, security, and high performance across all mobile platforms.',
  },
  {
    id: 4,
    name: 'Barcode-Based Data Capture',
    icon: <AiOutlineBarcode className="fs-1 text-primary" />,
    description: 'Streamline your operations with intelligent barcode scanning solutions. We develop customized applications that enable fast, accurate, and reliable data capture using barcode and QR technologies, improving inventory management, tracking, and operational efficiency.',
  },
  {
    id: 5,
    name: 'Label & ID Card Printing Integration',
    icon: <AiOutlinePrinter className="fs-1 text-primary" />,
    description: 'Enable seamless printing solutions by integrating label and ID card printing systems with your applications. We connect your software with various printers, databases, and APIs to automate printing workflows and ensure accuracy and consistency in output.',
  },
  {
    id: 6,
    name: 'Consultancy, Integration & Implementation',
    icon: <AiOutlineDeploymentUnit className="fs-1 text-primary" />,
    description: 'Leverage our expertise to plan, integrate, and implement robust technology solutions. SoftCygnus provides end-to-end consulting services to help businesses adopt the right technologies, streamline processes, and successfully execute digital transformation initiatives.',
  },
  {
    id: 7,
    name: 'IT Help Desk Support',
    icon: <AiOutlineCustomerService className="fs-1 text-primary" />,
    description: 'Ensure uninterrupted business operations with our dedicated IT help desk support. We provide proactive monitoring, troubleshooting, and technical assistance for hardware, software, and network issues—minimizing downtime and maximizing productivity.',
  },
  {
    id: 8,
    name: 'Search Engine Optimization (SEO)',
    icon: <AiOutlineSearch className="fs-1 text-primary" />,
    description: 'Increase your online visibility and attract the right audience with our result-driven SEO strategies. We optimize your website through keyword targeting, technical improvements, and content strategies to boost rankings, drive organic traffic, and generate high-quality leads.',
    link: '/seo-services'
  },
  {
    id: 9,
    name: 'Reporting & Analytics',
    icon: <AiOutlineAreaChart className="fs-1 text-primary" />,
    description: 'Make smarter business decisions with powerful reporting and analytics solutions. SoftCygnus delivers customized dashboards and real-time reports that simplify complex data, improve visibility, and help you track performance across all business operations.',
  },
  {
    id: 10,
    name: '.NET Technologies',
    icon: <BsMicrosoft className="fs-1 text-primary" />,
    description: 'Leverage the power of Microsoft .NET to build scalable and secure applications. We develop desktop, web, and cross-platform solutions using modern .NET frameworks tailored to meet your enterprise needs and performance requirements.',
  },
  {
    id: 11,
    name: 'Database Development',
    icon: <AiOutlineDatabase className="fs-1 text-primary" />,
    description: 'Build robust, secure, and high-performance databases with our expert development services. We design and manage databases using technologies like MS SQL, MySQL, Oracle, and MongoDB, ensuring data integrity, scalability, and seamless integration.',
  },
  {
    id: 12,
    name: 'Trainings & Workshops',
    icon: <AiOutlineRocket className="fs-1 text-primary" />,
    description: 'Empower your team with customized training programs, workshops, and mentoring sessions. We offer practical learning experiences in software development, tools, and technologies to enhance skills and drive organizational growth.',
  },
  {
    id: 13,
    name: 'Business Analysis',
    icon: <AiOutlineUser className="fs-1 text-primary" />,
    description: 'Turn data into actionable insights with our business analysis services. We help identify challenges, optimize processes, and recommend strategic improvements to enhance efficiency, reduce costs, and support business growth.',
  },
  {
    id: 14,
    name: 'User Experience (UX) Design',
    icon: <AiOutlineHtml5 className="fs-1 text-primary" />,
    description: 'Deliver exceptional user experiences with intuitive and user-friendly designs. Our UX experts focus on usability, accessibility, and engagement to create digital products that users love and businesses benefit from.',
  },
];

export default Sdata;