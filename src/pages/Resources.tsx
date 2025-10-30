import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Landmark, Recycle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Key Legislation & Duty of Care",
      description: "Understanding the rules for waste carriers and your legal responsibilities.",
      icon: Landmark,
      iconColor: "text-[#1f502e]",
      articles: [
        {
          title: "Waste Carrier Licensing Explained",
          href: "/resources/carrier-licensing"
        },
        {
          title: "Your Duty of Care (Homeowners & Businesses)",
          href: "/resources/duty-of-care"
        },
        {
          title: "Risks of Using Unlicensed Carriers",
          href: "/resources/fly-tipping-risks"
        }
      ]
    },
    {
      title: "Practical Waste Management",
      description: "Tips for correctly handling and disposing of different waste types.",
      icon: Recycle,
      iconColor: "text-[#72b337]",
      articles: [
        {
          title: "Quick Guide to Household Recycling",
          href: "/resources/household-recycling"
        },
        {
          title: "Identifying Hazardous Waste",
          href: "/resources/hazardous-waste-basics"
        },
        {
          title: "How to Avoid Illegal Waste Dumping",
          href: "/resources/avoiding-fly-tipping"
        }
      ]
    },
    {
      title: "Finding & Verifying Carriers",
      description: "How to use this directory and check a carrier's license.",
      icon: CheckCircle,
      iconColor: "text-[#1f502e]",
      articles: [
        {
          title: "Using the Approved Carrier Directory",
          href: "/resources/using-directory"
        },
        {
          title: "How to Check a Waste Carrier's License",
          href: "/resources/checking-license"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow bg-muted/30">
        {/* Hero Section */}
        <div className="bg-[#1f502e] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Waste Management Resources
            </h1>
            <p className="text-xl text-green-100">
              Essential guides covering waste legislation, your responsibilities, and how to find licensed carriers.
            </p>
          </div>
        </div>

        {/* Resources Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="border-[#1f502e]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <IconComponent className={`h-10 w-10 ${category.iconColor}`} />
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-[#1f502e]/70">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-sm">
                          <Link
                            to={article.href}
                            className="text-[#1f502e] hover:text-[#72b337] hover:underline flex items-center group"
                          >
                            <span className="h-1.5 w-1.5 bg-[#72b337] inline-block mr-2 rounded-full flex-shrink-0 group-hover:bg-[#72b337]" />
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
