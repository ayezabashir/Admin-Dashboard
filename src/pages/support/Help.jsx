import { useMemo, useState } from "react";
import helpData from "../../data/helpData.json";
import PageHeader from "../../components/PageHeader";
import HelpSearch from "../../components/Help/HelpSearch";
import HelpList from "../../components/Help/HelpList";

const Help = () => {
  const [search, setSearch] = useState("");

  const filteredHelp = useMemo(() => {
    return helpData.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="space-y-6 text-gray-900 dark:text-gray-200">
      <PageHeader
        headerTitle="Help Center"
        headerSubtitle="Find answers to common questions and issues"
      />
      <HelpSearch search={search} setSearch={setSearch} />
      <HelpList items={filteredHelp} />
    </div>
  );
};

export default Help;
