# SUYASH
**LinkedIn** | **GitHub** | **Tableau** | **Website** | **Publication** | **Statistical Study**
suyashkumarthakur@gmail.com ❖ +1(469) 428-6430 ❖ Dallas, Texas, USA

**Experimentation Platform Architect** specializing in causal inference and high-velocity testing infrastructure at Fortune 100 scale. Led platform re-architecture that scaled test velocity 3→8/week and enabled $150M+ in revenue decisions through variance reduction (CUPED) and Bayesian experimentation. Expert in quasi-experimental design, A/B testing at scale, and translating statistical rigor into product velocity.

## WORK EXPERIENCE

**Safeway Inc.**  
*Data Scientist IV* — Pleasanton, CA  
*Feb 2024 – Present*

*   **Boosted testing velocity from 3 to 8+ experiments per week** by architecting SAFE experimentation pipeline across ingestion, processing, and visualization layers, eliminating Excel workflows.
*   **Enabled management of 17+ new metrics** (non-zero e-commerce, account health KPIs) by orchestrating integration into SAFE pipeline, expanding measurement capabilities.
*   **Migrated 70% of experimentation codebase from Snowflake to GCP BigQuery** while ensuring data integrity through comprehensive QA protocols, supporting increased scale.
*   **Reduced abandonment rate by 8+%** by enhancing opportunity sizing framework with predictive forecasting models and business metrics, enabling prioritization toward high-impact tests.
*   **Doubled annual testing capacity** by pioneering **Bayesian experimentation framework** with **sequential testing**, reducing test duration from 8 to 3 weeks through **early stopping rules** and **posterior credible intervals**.
*   **Data Scientist III**
*   **Drove 40% increase in testing velocity** by designing and executing CUPED on A/B tests across Digital and In-Store categories. Reduced test variance, enabling faster time to statistical power and quicker decision cycles.
*   **Accelerated ad-hoc analysis by 90+%** by implementing AI-powered querying via GeminiAPI, enabling natural language data exploration.

**Discover Financial Services**  
*Senior Data Scientist* — Chicago, IL  
*Aug 2022 – Oct 2023*

*   **Generated $114M in annual loan volume** by leveraging XGBoost analysis to prove employment verification added no predictive value, then executing an A/B test on low-risk segments that increased conversions by 300+ customers monthly through friction reduction.
*   **Enabled $1.8M in loan approvals** by identifying and resolving critical iOS bugs through funnel analysis on the Automated Loan Approval platform, collaborating with engineering and UI/UX teams to restore conversion flow.
*   **Improved customer segmentation model accuracy by 12%** by integrating GCP TensorFlow and collaborating with ML engineering team, enabling more precise risk assessment and targeted marketing strategies.
*   **Reduced infrastructure costs by 12+%** by migrating legacy SAS workflows to modular SQL queries, improving cluster efficiency and data processing performance.

**Kaizen**  
*Data Science Engineering Intern* — Atlanta, GA  
*Jun 2021 – Dec 2021*

*   **Informed 3+ marketing campaigns** by analyzing user clustering patterns to uncover distinct customer journey types, translating data insights into actionable segmentation strategies.
*   **Reduced authentication false positives by 13%** by building ETL pipelines and deploying an anomaly detection model on AWS SageMaker, adding risk-based flagging to enhance 2FA security.
*   **Improved forecasting accuracy by 8.5%** by designing a hybrid time-series model integrating Prophet and LSTM for Toyota sales prediction, outperforming baseline statistical models.

**Vodafone**  
*Assistant Manager, Data Science* — Pune, IN  
*Jun 2016 – Feb 2019*

*   **Increased marketing revenue by $11.2M and improved CTR by 28%** by orchestrating email personalization using logistic regression to optimize content targeting, then A/B testing new campaign strategies.
*   **Enhanced customer lifetime value by 5%** by developing Linear Regression models to optimize subscription pricing based on user data and predicted retention patterns across customer segments.
*   **Increased subscription revenue by 28%** by developing retention prediction models and recommending country-specific pricing strategies, collaborating with product teams to inform roadmap and go-to-market planning.
*   **Senior Executive, Data Science**
*   **Enabled real-time performance tracking across 10+ models** by partnering with product teams to define and instrument 15+ custom metrics, building SQL pipelines and executive dashboards for new feature evaluation.
*   **Reduced Priority 2 production issues by 60+%** by developing Tableau dashboards with time series forecasting alerts, enabling proactive incident detection and faster resolution.

## SELECTED PROJECTS & CASE STUDIES

**From Sequential to Parallel: Experimentation Inference Engine**  
*   **Challenge:** Legacy system ran 15+ sequential queries per experiment (~15 min runtime). As metrics increased, latency scaled linearly toward 25-30 minutes, preventing scale to 8+ concurrent tests.
*   **Solution:** Re-architected multiple sequential queries into **parallel metric bundles** (Transaction, Engagement, Specialized), reducing runtime to ~4 minutes (75% reduction) via O(1) table scans.
*   **Variance Reduction:** Implemented **CUPED methodology** using pre-experiment user behavior as covariates, achieving 20-40% variance reduction and 30% lower MDE.
*   **Impact:** Unlocked **$150M+ in attributed revenue** decisions through higher velocity (3→8/week) and ability to detect smaller 0.5% lifts.

**The $114M Friction Fix: Employment Verification Optimization**  
*   **Discovery:** Applied **causal inference** via XGBoost feature importance + correlation analysis to discover that Employment Verification (EV) status had zero correlation with default rates for FICO >720 (p > 0.05).
*   **Solution:** Designed a **stratified randomization A/B test** using presplit methodology to isolate treatment effect on high-quality applicants.
*   **Impact:** Captured **300+ additional customers monthly** ($50M realized volume) by removing friction for low-risk users; projected **$114M annualized impact**.

**GenAI Experimentation Copilot**  
*   **Challenge:** Data Science team spent 8+ hours/week on manual SQL generation, QA checks, and narrative summarization for stakeholders.
*   **Solution:** Built internal agent utilizing **Gemini API + LangChain** to auto-generate SQL queries, run QA checks, and draft Markdown narratives from experiment metadata.
*   **Impact:** Eliminated 8+ hours/week of manual work, reduced onboarding time from 2 weeks to 3 days, and enabled non-technical PMs to run self-serve analyses.

**Ads Analysis and Clustering - E-Commerce Analytics (Data Science Club Hackathon 21’) (1st place finish)**
*   Identified the 5 best ad groups using Profits and CTR. Clustering ads into 3 groups, based on Average Cost Per Click.

## EDUCATION

**The University of Texas at Dallas** — Dallas, TX  
*MS, Business Analytics* — Jun 2022  
*   Dean’s Scholar (Top 20 %); President, Data Science Club — led workshops and speaker series.
*   Top Student Mentor for Data Science track subjects. Answered 800+ questions and coached 70+ students.

**Pune University** — Pune, IN  
*BS, Computer Science and Engineering* — Jun 2016

## SKILLS

**Programming & Data:** Python, SQL, PySpark, BigQuery, Airflow, Pandas, NumPy, Scikit-learn, TensorFlow, LangChain
**Machine Learning & Product:** A/B Testing, Bayesian Methods, **Causal Inference**, Uplift Modeling, Prompt Engineering.
**Infrastructure & Visualization:** GCP (BigQuery, Vertex AI), AWS (S3, SageMaker), Azure, Docker, Streamlit, Tableau.
**Certifications:** Google Analytics
