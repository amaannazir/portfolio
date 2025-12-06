import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillsData = [
  { skill: "C# & .NET", proficiency: 95, fullMark: 100 },
  { skill: "ASP.NET Core", proficiency: 90, fullMark: 100 },
  { skill: "SQL Server", proficiency: 88, fullMark: 100 },
  { skill: "TypeScript", proficiency: 85, fullMark: 100 },
  { skill: "CSS", proficiency: 85, fullMark: 100 },
  { skill: "Blazor", proficiency: 82, fullMark: 100 },
  { skill: "Entity Framework", proficiency: 88, fullMark: 100 },
  { skill: "Azure DevOps", proficiency: 80, fullMark: 100 },
  { skill: "React", proficiency: 78, fullMark: 100 },
  { skill: "Mobile Dev", proficiency: 75, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card px-4 py-2 rounded-lg border border-primary/20">
        <p className="text-sm font-medium text-foreground">
          {payload[0].payload.skill}
        </p>
        <p className="text-xs text-primary">
          Proficiency: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const SkillsRadar = () => {
  const headerAnimation = useScrollAnimation(0.1);

  return (
    <section id="skills-radar" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-12 transition-all duration-700 ${
              headerAnimation.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight">
              Skill <span className="text-primary">Proficiency</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Interactive visualization of technical expertise levels
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12">
            <ResponsiveContainer width="100%" height={450}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid 
                  stroke="hsl(var(--muted-foreground))" 
                  strokeOpacity={0.2}
                  strokeDasharray="3 3"
                />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ 
                    fill: "hsl(var(--foreground))", 
                    fontSize: 12,
                    fontWeight: 300
                  }}
                  tickLine={false}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ 
                    fill: "hsl(var(--muted-foreground))", 
                    fontSize: 10 
                  }}
                  tickCount={5}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Radar
                  name="Proficiency"
                  dataKey="proficiency"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  dot={{
                    r: 4,
                    fill: "hsl(var(--primary))",
                    strokeWidth: 2,
                    stroke: "hsl(var(--background))",
                  }}
                  activeDot={{
                    r: 6,
                    fill: "hsl(var(--primary))",
                    stroke: "hsl(var(--background))",
                    strokeWidth: 2,
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {skillsData.map((item) => (
                <div
                  key={item.skill}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-light">{item.skill}</span>
                  <span className="text-xs text-primary font-medium">{item.proficiency}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadar;
