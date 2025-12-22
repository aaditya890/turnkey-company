import { Component, type ElementRef, HostListener, ViewChild, type AfterViewInit } from "@angular/core"

interface ProjectSlide {
  image: string
  title: string
}

interface BlogCard {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-project-slide",
  standalone: true,
  imports: [],
  templateUrl: "./project-slide.component.html",
  styleUrl: "./project-slide.component.scss",
})
export class ProjectSlideComponent implements AfterViewInit {
  @ViewChild("sliderTrack", { static: false })
  sliderTrack!: ElementRef

  projectSlides: ProjectSlide[] = [
    {
      image:
        "https://images.livspace-cdn.com/w:500/h:466/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/livspace-homes-1682068198-shXmv/modern-4-bhk-penthouse-home-design-in-bangalore-1682068280-rncG1.jpg",
      title: "Modern 3 BHK Apartment, Bangalore",
    },
    {
      image:
        "https://images.livspace-cdn.com/w:500/h:466/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/livspace-homes-1682068198-shXmv/modern-house-design-for-2-bhk-flat-in-mumbai-1682068281-ab4gr.jpg",
      title: "Contemporary Villa, Noida",
    },
    {
      image:
        "https://images.livspace-cdn.com/w:500/h:466/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/livspace-homes-1682068198-shXmv/contemporary-house-design-for-3-bhk-flat-in-ahmedabad-1682068278-VzD95.jpg",
      title: "Elegant 2 BHK Flat, Mumbai",
    },
    {
      image:
        "https://images.livspace-cdn.com/w:500/h:466/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/livspace-homes-1682068198-shXmv/contemporary-3-bhk-house-design-in-gurgaon-1682068277-e8xQN.jpg",
      title: "Luxury Kitchen, Gurgaon",
    },
  ];


  blogCards: BlogCard[] = [
    {
      image:
        'https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/08/08133411/modern-window-blinds.jpg',
      title: 'The Complete Guide to Window Blinds for Indian Homes',
      description:
        'Everything you need to know about choosing the right blinds for Indian interiors.',
    },
    {
      image:
        'https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2024/05/16124620/modern-house-design-styles.jpg',
      title: 'How Do Architects Define Modern House Design in India Today?',
      description:
        'A deep dive into modern architectural principles shaping Indian homes.',
    },
    {
      image:
        'https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2025/11/01142623/coastal-design-tips-from-the-summer-i-turned-pretty.jpg',
      title: 'Bring the Cousins Beach House Look Home',
      description:
        'Coastal interior design ideas to give your home a relaxed vacation vibe.',
    },
  ];

  projectIndex = 0
  slidesPerView = 3 // Dynamic slides per view based on screen size
  maxIndex = 0 // Maximum index to prevent white space

  ngAfterViewInit() {
    this.calculateSlidesPerView()
    this.updateMaxIndex()
  }

  @HostListener("window:resize")
  onResize() {
    this.calculateSlidesPerView()
    this.updateMaxIndex()
    if (this.projectIndex > this.maxIndex) {
      this.projectIndex = this.maxIndex
    }
  }

  calculateSlidesPerView() {
    const width = window.innerWidth
    if (width >= 1024) {
      this.slidesPerView = 3 // Desktop: 3 slides
    } else if (width >= 640) {
      this.slidesPerView = 2 // Tablet: 2 slides
    } else {
      this.slidesPerView = 1.25 // Mobile: 1.25 slides (shows peek of next)
    }
  }

  updateMaxIndex() {
    this.maxIndex = Math.max(0, this.projectSlides.length - Math.floor(this.slidesPerView))
  }

  nextProject() {
    if (this.projectIndex < this.maxIndex) {
      this.projectIndex++
    }
  }

  prevProject() {
    if (this.projectIndex > 0) {
      this.projectIndex--
    }
  }
}
  