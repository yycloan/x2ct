"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/lib/movies-data"

interface MovieRowProps {
  title: string
  movies: Movie[]
  priority?: boolean
}

export default function MovieRow({ title, movies, priority = false }: MovieRowProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Width of one movie card plus gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      handleScroll() // Check initial state
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!movies.length) return null

  return (
    <div className="relative group">
      <div className="px-4 md:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{title}</h2>
      </div>

      <div className="relative">
        {/* Left Arrow - Hidden on mobile */}
        {showLeftArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        )}

        {/* Right Arrow - Hidden on mobile */}
        {showRightArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        )}

        {/* Movies Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-8 pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.slug}`}
              className="flex-none w-[160px] md:w-[200px] lg:w-[240px] group/card"
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 transition-transform duration-300 group-hover/card:scale-105">
                <Image
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority={priority}
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/40 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>

                {/* Quality Badge */}
                <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-600 text-white text-xs px-2 py-1">
                  {movie.quality}
                </Badge>

                {/* New Badge */}
                {movie.isNew && (
                  <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-600 text-white text-xs px-2 py-1">
                    NEW
                  </Badge>
                )}
              </div>

              {/* Movie Info */}
              <div className="mt-2 md:mt-3 space-y-1">
                <h3 className="text-white font-medium text-sm md:text-base line-clamp-2 group-hover/card:text-red-400 transition-colors">
                  {movie.title}
                </h3>

                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{movie.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Eye className="w-3 h-3" />
                  <span>{movie.views.toLocaleString()} views</span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {movie.genre.slice(0, 2).map((genre) => (
                    <span key={genre} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
