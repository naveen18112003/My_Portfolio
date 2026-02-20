import os

# Chat history data from system context
chat_history = [
    {
        "id": "bd7b1b3c-00e5-4e2f-984c-447f590a3460",
        "date": "2026-01-29",
        "summary": "General chat session."
    },
    {
        "id": "ade2fbb4-0d8f-4fe3-b543-84301b6a3136",
        "date": "2026-01-26",
        "summary": "Fixed GitHub logo visibility issues on mobile and adjusted font sizes."
    },
    {
        "id": "19f1b5ee-b6bf-48ac-a405-24187a6f07c6",
        "date": "2026-01-26",
        "summary": "Updated project demo and source code links in the portfolio."
    },
    {
        "id": "aa06918a-b20f-47b0-9baf-5e13b13b54c1",
        "date": "2026-01-25",
        "summary": "Enhanced UI with high-quality graphics and animations."
    },
    {
        "id": "1feb5776-3f19-4796-b8d7-a8731a3b391b",
        "date": "2026-01-25",
        "summary": "Created README file with setup instructions and updated GitHub links."
    },
    {
        "id": "2bf83e3c-f9cc-446e-8163-244d46a78fc5",
        "date": "2026-01-24",
        "summary": "Debugged AI model response errors in the backend."
    },
    {
        "id": "93e8df44-134e-4dab-9a19-0e42ff15c1ac",
        "date": "2026-01-24",
        "summary": "Investigated and fixed issues with PDF report downloads."
    },
    {
        "id": "ad7c7238-a818-43c2-8369-d13b6d021975",
        "date": "2026-01-24",
        "summary": "Resolved Vercel deployment issues for the AI Business Ops Manager."
    },
    {
        "id": "b45063fa-418a-4ac5-bada-119c7a415e7d",
        "date": "2026-01-23",
        "summary": "Fixed KeyError in data processing and redeployed to Streamlit Cloud."
    },
    {
        "id": "9941bc5c-f91c-4f6a-99fb-0e7796fa916a",
        "date": "2026-01-23",
        "summary": "Configured GitHub tokens for AI features in the Sales Dashboard."
    },
    {
        "id": "9041a49e-6651-4fa7-86b9-abf320edb958",
        "date": "2026-01-23",
        "summary": "Initial deployment of Sales Dashboard to Streamlit Cloud."
    },
    {
        "id": "13bb2025-4bba-4c0b-a925-8a1cbda75e4b",
        "date": "2026-01-23",
        "summary": "Added setup and deployment documentation for Streamlit."
    },
    {
        "id": "364589a1-6554-4644-9beb-a69e96c27281",
        "date": "2026-01-22",
        "summary": "Performed local testing of the frontend and backend components."
    },
    {
        "id": "2d9db34d-6288-4d94-9189-088c19d68870",
        "date": "2026-01-22",
        "summary": "Installed Vercel CLI and prepared for RAG platform deployment."
    },
    {
        "id": "9807492f-bf69-4c89-9267-8651e3954d45",
        "date": "2026-01-22",
        "summary": "Detailed planning for deploying Enterprise RAG to Vercel."
    },
    {
        "id": "ab79310e-8179-4b8b-9ab4-0ae5ed0f1318",
        "date": "2026-01-22",
        "summary": "Started and verified the Enterprise RAG platform locally."
    },
    {
        "id": "6c24980f-0ebe-4bfc-86cd-0f56ad3e4630",
        "date": "2026-01-21",
        "summary": "Debugged 500 Internal Server Error following token update."
    },
    {
        "id": "f78519ce-10ac-449f-9144-24a40d1a1f16",
        "date": "2026-01-21",
        "summary": "Diagnosed analysis failure and connection issues."
    },
    {
        "id": "1b666802-a5fa-43dc-ad75-05c00dd55e89",
        "date": "2026-01-21",
        "summary": "Initial project exploration for Vercel deployment."
    },
    {
        "id": "09259f4a-8c72-4e19-ac44-70e1c3f77b0c",
        "date": "2026-01-20",
        "summary": "Refined AI logic for processing qualitative Operational Notes."
    }
]

def generate_html_report():
    html_content = """
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
            h1 { color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }
            .convo { margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 8px; background: #fdfdfd; }
            .id { font-size: 0.8em; color: #888; }
            .date { font-weight: bold; color: #555; }
            .summary { margin-top: 10px; line-height: 1.5; }
        </style>
    </head>
    <body>
        <h1>Antigravity Chat History Report</h1>
        <p>This report contains a summary of recent conversations from your session.</p>
    """
    
    for convo in chat_history:
        html_content += f"""
        <div class="convo">
            <div class="date">{convo['date']}</div>
            <div class="id">ID: {convo['id']}</div>
            <div class="summary">{convo['summary']}</div>
        </div>
        """
        
    html_content += "</body></html>"
    
    with open("chat_history.html", "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print("HTML report generated: chat_history.html")
    print("Note: Since fpdf is not installed, I've generated an HTML version which you can print to PDF from your browser.")

if __name__ == "__main__":
    generate_html_report()
