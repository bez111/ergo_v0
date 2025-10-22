"use client"

import { useState, useEffect } from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/src/components/ui/button'

interface BlogRatingProps {
  postId: string
  initialRating?: number
  initialCount?: number
  onRate?: (rating: number) => void
}

export function BlogRating({ postId, initialRating = 0, initialCount = 0, onRate }: BlogRatingProps) {
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [hasRated, setHasRated] = useState(false)
  const [averageRating, setAverageRating] = useState(initialRating)
  const [ratingCount, setRatingCount] = useState(initialCount)
  const [showThankYou, setShowThankYou] = useState(false)
  const [helpful, setHelpful] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already rated this post (from localStorage)
    const storedRating = localStorage.getItem(`blog-rating-${postId}`)
    if (storedRating) {
      setRating(parseInt(storedRating))
      setHasRated(true)
    }
  }, [postId])

  const handleRating = (value: number) => {
    if (hasRated) return

    setRating(value)
    setHasRated(true)
    
    // Store rating in localStorage
    localStorage.setItem(`blog-rating-${postId}`, value.toString())
    
    // Update average rating (mock calculation)
    const newCount = ratingCount + 1
    const newAverage = ((averageRating * ratingCount) + value) / newCount
    setAverageRating(newAverage)
    setRatingCount(newCount)
    
    // Show thank you message
    setShowThankYou(true)
    setTimeout(() => setShowThankYou(false), 3000)
    
    // Trigger callback
    if (onRate) {
      onRate(value)
    }
  }

  const handleHelpful = (isHelpful: boolean) => {
    setHelpful(isHelpful)
    localStorage.setItem(`blog-helpful-${postId}`, isHelpful.toString())
  }

  return (
    <div className="space-y-6">
      {/* Star Rating Section */}
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
        <h3 className="text-lg font-semibold mb-4 text-white">Rate this article</h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: hasRated ? 1 : 1.1 }}
                whileTap={{ scale: hasRated ? 1 : 0.95 }}
                onClick={() => handleRating(star)}
                onMouseEnter={() => !hasRated && setHoveredStar(star)}
                onMouseLeave={() => !hasRated && setHoveredStar(0)}
                disabled={hasRated}
                className={`transition-colors ${hasRated ? 'cursor-default' : 'cursor-pointer'}`}
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredStar || rating)
                      ? 'fill-orange-400 text-orange-400'
                      : 'text-gray-600'
                  }`}
                />
              </motion.button>
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            {hasRated ? (
              <span>You rated: {rating}/5</span>
            ) : (
              <span>Click to rate</span>
            )}
          </div>
        </div>

        {/* Average Rating Display */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{averageRating.toFixed(1)}</span>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(averageRating)
                        ? 'fill-orange-400 text-orange-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-xs">{ratingCount} ratings</p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
            >
              <p className="text-green-400 text-sm">Thank you for rating this article!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Helpful Section */}
      <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
        <h3 className="text-lg font-semibold mb-4 text-white">Was this article helpful?</h3>
        
        <div className="flex gap-3">
          <Button
            variant={helpful === true ? "default" : "outline"}
            size="sm"
            onClick={() => handleHelpful(true)}
            className={helpful === true ? "bg-green-500 hover:bg-green-600" : ""}
          >
            <ThumbsUp className="w-4 h-4 mr-2" />
            Yes
          </Button>
          <Button
            variant={helpful === false ? "default" : "outline"}
            size="sm"
            onClick={() => handleHelpful(false)}
            className={helpful === false ? "bg-red-500 hover:bg-red-600" : ""}
          >
            <ThumbsDown className="w-4 h-4 mr-2" />
            No
          </Button>
        </div>

        {helpful !== null && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm text-gray-400"
          >
            Thank you for your feedback! It helps us improve our content.
          </motion.p>
        )}
      </div>
    </div>
  )
} 