document.addEventListener("DOMContentLoaded", () => {
  const data = {
    _id: {
      $oid: "63b64dc9e3b230ebb60a495d",
    },
    _key: "topic:2085",
    category: "Course",
    cid: {
      $numberDouble: "NaN",
    },
    commitment: "4 hours",
    commitment_type: "custom",
    deadline: "",
    description:
      "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    faqs: [],
    globalTags: [],
    isActive: true,
    lastposttime: 0,
    learning_outcomes: [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently",
    ],
    mainPid: 0,
    postcount: 0,
    pre_requisites: [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning ",
    ],
    project_image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    short_description:
      "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    slug: "2085/technical-project-management",
    status: "published",
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description:
          "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        status: "notworkyet",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_type: "display_asset",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "threadbuilder",
          },
          {
            asset_id: 18885,
            asset_title: "Structure you pointers ",
            asset_description:
              "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content: " ",
            asset_type: "input_asset",
            asset_content_type: "article",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content:
              " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_type: "display_asset",
            asset_content_type: "article",
          },
          
        ],
      },
    ],
    tid: 2085,
    timestamp: 1672891849700,
    title: "Technical Project Management",
    type: "project",
    uid: 100,
    viewcount: 0,
    publishedAt: 1672893847792,
  };

  const renderData = (data) => {
    const headerH1 = document.querySelector(".header h1");
    headerH1.textContent = `${data.title}`;

    const header2H3 = document.querySelector(".header2 h3");
    header2H3.textContent = `${data.tasks[0].task_title}`;

    const header2p = document.querySelector(".header2 p");
    header2p.textContent = `${data.tasks[0].task_description}`;

    //  collapse data
     const sideTitle = document.querySelector(".expand-box h4")
     sideTitle.textContent = `${data.tasks[0].task_title}`

     const expandBox = document.querySelector(".expand-box")
     const sideList = document.querySelector("ul");
      sideList.innerHTML = data.tasks[0].assets.map((item) =>{
      return `</div>
              <li>${item.asset_title}</li >`;
     }).join("");
     expandBox.append(sideList);


  
      // All Cards data 
        const cards = document.querySelector(".cards");
        const allCards = data.tasks[0].assets.map((item,index) => {
            return `<div class="card">
                <div class="title">
                  <h4>${item.asset_title}</h4>
                  <img src="Assets/info.svg" alt="info" />
                </div>
                <div class="description">
                  <p><b>Description:</b> ${item.asset_description}</p>
                   ${index === 0 ? `<iframe width="560" height="315" src=${item.asset_content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : ''}
                  
                   ${index ===1 ? `<h2 class="thread-a">Thread A<h2> 
                    <div class="subs d-flex items-center">
                      <div class="sub-thread">
                      <h6>Sub thread 1</h6>
                      <input type="text" placeholder="Enter Text here">
                      </div>
                      <div class="sub-thread">
                      <h6>Sub Interpretation 1</h6>
                      <input type="text" placeholder="Enter Text here">
                      </div>
                    </div> 
                    <div class="catalogs d-flex items-center">
                        <img src="Assets/Qa.svg" alt="Qa" class="Qa">
                        <select >
                        <option >Select Categ</option>
                        <option>Thread A</option>
                        <option>Thread</option>
                      </select>
                      <select >
                        <option >Select Process</option>
                        <option>Fast</option>
                        <option>Medium</option>
                      </select>
                    </div>
                    <button>
                    <img src="Assets/plus.svg" alt="plus"/>
                    Sub-thread
                  </button>
                  <div class="summary">
                        <h6>Summary for Thread A</h6>
                        <input type="text" placeholder="Enter Text Here">
                  </div> `:""}
                  ${index ===2 ? ` <div class="bx-3">
          <div class="bx-2">
            <h3>Title</h3>
          <input type="text">
          </div>
          <h3>Content</h3>
          <div class="all-content">
            <div class="content d-flex">
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Insert</p>
              <p>Format</p>
              <p>Tools</p>
              <p>Table</p>
              <p>Help</p>
          </div>
          <div class="content-tool d-flex items-center">
            <img src="Assets/arrow-curve-left-right.svg" alt="arrow-curve-left-right">
            <img src="Assets/arrow-curve-left-down.svg" alt="arrow-curve-left-down">
            <img src="Assets/arrow-expand-02.svg" alt="arrow-expand-02">
            <p>Paragraph</p>
          </div>
          </div>
          <input type="text" class="full-inp"/>
          <div>

          </div>
        </div>` : ""}


        ${index ===3 ? `<div class="bx-4">
                            <h3 class="intro">Introduction</h3>
                            <p>The 4SA Method , How to bring a idea into progress ?</p>
                            <span>See More</span>
                            <h3 class="thread-4">Thread A</h3>
                            <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                            <span>See More</span>
                            <h3 class="example">Example 1 </h3>
                        </div>
                        `
                        
                    :""}

                  </div>
                </div>`
        }).join('');
            cards.innerHTML = allCards;
        
          
  };

  renderData(data);


  // Collapse expand funcionality
  const sideBar = document.querySelector(".sidebar");
  const leftArrrow = document.querySelector(".left-arrow");
  const rightArrrow = document.querySelector(".right-arrow");

  rightArrrow.addEventListener("click", ()=>{
    sideBar.classList.toggle("collapse");
  })
  leftArrrow.addEventListener("click", ()=>{
    sideBar.classList.toggle("collapse");
  })

 

});


