import React, { useEffect, useState } from "react";

const NAMESPACE = "sujitraj-portfolio";
const KEY = "profile-views";
const SESSION_FLAG = "portfolio-view-counted";
const LOCAL_COUNT_KEY = "portfolio-local-profile-views";

const VisitorCounter = () => {
  const [viewCount, setViewCount] = useState(null);
  const [showOwnerPanel, setShowOwnerPanel] = useState(false);
  const [sourceLabel, setSourceLabel] = useState("live");
  const [status, setStatus] = useState("loading");

  const updateLocalCount = (hasCountedThisSession) => {
    const raw = localStorage.getItem(LOCAL_COUNT_KEY);
    const parsed = Number.parseInt(raw || "0", 10);
    const current = Number.isFinite(parsed) ? parsed : 0;
    const next = hasCountedThisSession ? current : current + 1;

    localStorage.setItem(LOCAL_COUNT_KEY, String(next));
    if (!hasCountedThisSession) {
      sessionStorage.setItem(SESSION_FLAG, "1");
    }

    setViewCount(next);
    setSourceLabel("local");
    setStatus("ready");
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hashQuery = window.location.hash.includes("?")
      ? window.location.hash.split("?")[1]
      : "";
    const hashParams = new URLSearchParams(hashQuery);
    const isOwnerView =
      searchParams.get("owner") === "true" ||
      hashParams.get("owner") === "true";
    setShowOwnerPanel(isOwnerView);

    if (!isOwnerView) {
      return;
    }

    const endpoint = `https://api.countapi.xyz`;
    const hasCountedThisSession = sessionStorage.getItem(SESSION_FLAG) === "1";

    const updateCount = async () => {
      try {
        const route = hasCountedThisSession
          ? `/get/${NAMESPACE}/${KEY}`
          : `/hit/${NAMESPACE}/${KEY}`;
        const response = await fetch(`${endpoint}${route}`);

        if (!response.ok) {
          throw new Error("Counter service unavailable");
        }

        const data = await response.json();

        if (typeof data.value === "number") {
          setViewCount(data.value);
          setSourceLabel("live");
          setStatus("ready");
        } else {
          updateLocalCount(hasCountedThisSession);
        }

        if (!hasCountedThisSession) {
          sessionStorage.setItem(SESSION_FLAG, "1");
        }
      } catch (error) {
        updateLocalCount(hasCountedThisSession);
      }
    };

    updateCount();
  }, []);

  if (!showOwnerPanel) {
    return null;
  }

  if (status === "loading") {
    return (
      <div className="fixed bottom-3 left-3 z-[60] rounded-md border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-200 backdrop-blur-sm">
        Loading profile views...
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 left-3 z-[60] rounded-md border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 backdrop-blur-sm">
      Profile views: {viewCount} ({sourceLabel})
    </div>
  );
};

export default VisitorCounter;
